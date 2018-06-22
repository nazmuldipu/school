import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './containers/index/index.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [IndexComponent]
})
export class HomeModule {}
