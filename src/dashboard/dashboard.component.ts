import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .dashboard {
        padding-top: 54px !important;
      }
      .side-nav-offset {
        padding-left: 300px;
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
export class DashboardComponent {}
