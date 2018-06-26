import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/shared/services/navbar.service';
import { SideNavbarData } from 'src/shared/json/side-nav-data';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  menuList: any;
  selected: any = 'Dashboard';
  navUrl: any;

  constructor(private router: Router, private sideNav: NavbarService) {
    this.menuList = SideNavbarData;
  }

  ngOnInit() {}

  get navCollaps() {
    return this.sideNav.getSideNavBarCollapse();
  }

  select(smenu) {
    this.selected = smenu;
  }

  isActive(smenu) {
    return this.selected === smenu;
  }

  minimize(smenu) {
    this.selected = smenu == this.selected ? null : smenu;
  }

  hasAuthority(authority: string): boolean {
    // console.log(authority);
    // if (authority == '' || authority == null) return true;
    // return this.roles.includes(authority);
    return true;
  }

  navigateTo(url: string) {
    this.navUrl = url;
    this.router.navigate([url]);
  }
}
