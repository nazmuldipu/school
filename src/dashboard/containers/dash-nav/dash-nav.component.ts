import { Component } from '@angular/core';
import { NavbarService } from 'src/shared/services/navbar.service';

@Component({
  selector: 'dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.scss']
})
export class DashNavComponent {
  show = false;

  constructor(private sideNav: NavbarService) {}

  setSideNav() {
    this.sideNav.setSideNavBarCollapse();
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    console.log('Logout');
  }
}
