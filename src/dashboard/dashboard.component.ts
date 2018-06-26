import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/shared/services/navbar.service';

@Component({
  selector: 'dashboard',
  template: `
  <dash-nav></dash-nav>
  <div class="container-fluid dashboard p-0">
    <side-nav></side-nav>
    <div class="row m-0" >
      <div [ngClass]="navCollaps? 'col-md-12 p-0' : 'side-nav-offset col-md-12'">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
      .dashboard {
        padding-top: 54px !important;
      }
      .side-nav-offset {
        padding-left: 285px;
        padding-right: 0;
      }
      .container-fluid {
        font-size: 14px;
      }

      @media (max-width: 767px) {
        .side-nav-offset {
          padding-left: 0;
        }
      }
    `
  ]
})
export class DashboardComponent {
  constructor(private sideNav: NavbarService) {}

  ngOnInit() {}

  get navCollaps() {
    return this.sideNav.getSideNavBarCollapse();
  }
}
