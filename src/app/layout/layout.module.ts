import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMenuComponent } from './components/navbar/navbar-menu/navbar-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileMenuComponent } from './components/navbar/profile-menu/profile-menu.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    NavbarMenuComponent,
    SidebarComponent,
    SidebarMenuComponent,
    ProfileMenuComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, AngularSvgIconModule],
})
export class LayoutModule {}
