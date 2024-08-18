import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users = signal<User[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://freetestapi.com/api/v1/users?limit=8').subscribe({
      next: (data) => this.users.set(data),
    });
  }

  public toggleUsers(checked: any) {
    this.users.update((users) => {
      return users.map((user) => {
        return { ...user, selected: checked };
      });
    });
  }

  ngOnInit() {}
}
