import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';

@NgModule({
  declarations: [UsersListComponent, AddUserModalComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
})
export class UsersModule {}
