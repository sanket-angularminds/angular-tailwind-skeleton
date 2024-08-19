import { UsersService } from './../../../shared/services/users.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { generateRandomId } from 'src/app/shared/constants/utils';
import { User } from 'src/app/shared/models/user.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit {
  @Input() isModalOpen = false;
  @Output() close = new EventEmitter<void>();

  private users: User[] = [];
  private isUpdate: boolean = false;
  private userToUpdateIndex!: number;

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorageService,
    private usersService: UsersService,
    private toastr: ToastrService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      username: ['', Validators.required],
      occupation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.openUpdateModal();
  }

  private openUpdateModal(): void {
    this.usersService.user.subscribe((user) => {
      const data: User = user;
      if (data.name) {
        this.userForm.patchValue(user);
        this.userToUpdateIndex = user.index;
        this.isUpdate = true;
      }
    });
  }

  public closeModal(): void {
    this.userForm.reset();
    this.isModalOpen = false;
    this.isUpdate = false;
    this.usersService.user.next({});
    this.close.emit();
  }

  public onSubmit(): void {
    if (this.userForm.valid) {
      const data: User[] = this.localStorage.getItem('users');
      this.users = [];

      if (this.isUpdate) {
        data[this.userToUpdateIndex] = this.userForm.value;
        this.users = [...data];
        this.toastr.success('User updated successfully!');
      } else {
        const userInfo = { _id: generateRandomId(8), ...this.userForm.value };

        if (data) {
          this.users = [...data];
        }

        this.users.push(userInfo);
        this.toastr.success('User created successfully!');
      }

      this.localStorage.setItem('users', this.users);
      this.close.emit();
      this.closeModal();
    } else {
      this.toastr.error('All fields are required!');
    }
  }
}
