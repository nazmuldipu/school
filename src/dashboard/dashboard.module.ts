import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './containers/index/index.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{ path: '', component: IndexComponent }]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [DashboardComponent, IndexComponent]
})
export class DashboardModule {}
