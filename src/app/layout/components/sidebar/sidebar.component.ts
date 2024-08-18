import { Component } from '@angular/core';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
