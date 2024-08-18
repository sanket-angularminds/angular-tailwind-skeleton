import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { TableRowComponent } from './table-row/table-row.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { TableHeaderComponent } from './table-header/table-header.component';

@NgModule({
  declarations: [UsersListComponent, TableRowComponent, TableHeaderComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    AngularSvgIconModule,
  ],
})
export class UsersModule {}
