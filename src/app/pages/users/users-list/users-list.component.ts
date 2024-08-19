import { UsersService } from './../../../shared/services/users.service';
import { LocalStorageService } from './../../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  user: User = <User>{};
  isModalOpen = false;

  constructor(
    private localStorage: LocalStorageService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const data = this.localStorage.getItem('users');
    if (data) {
      this.users = data;
    }
  }

  public updateUser(user: User, userIndex: number) {
    this.usersService.user.next({ ...user, index: userIndex });
    this.isModalOpen = true;
  }

  public deleteUser(userId: string) {
    const data = this.localStorage.getItem('users');

    if (data) {
      this.users = data;

      const result = this.users.filter((user) => {
        return userId !== user._id;
      });

      this.localStorage.setItem('users', result);
      this.users = result;
    }
  }

  public openModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    const data = this.localStorage.getItem('users');
    if (data) {
      this.users = data;
    }
    this.isModalOpen = false;
  }
}
