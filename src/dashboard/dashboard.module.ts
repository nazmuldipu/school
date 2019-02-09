import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/shared/shared.module';

import { DashNavComponent } from './containers/dash-nav/dash-nav.component';
import { IndexComponent } from './containers/index/index.component';
import { SideNavComponent } from './containers/side-nav/side-nav.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';
import { CalendarComponent } from './components/calendar/calendar.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      {
        path: 'students',
        loadChildren: '../students/students.module#StudentsModule'
      },
      {
        path: 'teachers',
        loadChildren: '../teachers/teachers.module#TeachersModule'
      },
      {
        path: 'parents',
        loadChildren: '../parents/parents.module#ParentsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DashboardComponent,
    IndexComponent,
    DashNavComponent,
    SideNavComponent,
    ProfileComponent,
    ChangePasswordComponent,
    CalendarComponent
  ]
})
export class DashboardModule {}
