import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './containers/details/details.component';
import { NewComponent } from './containers/new/new.component';
import { PromotionComponent } from './containers/promotion/promotion.component';
import { StudentsComponent } from './containers/students/students.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: StudentsComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'new/:id',
    component: NewComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'promotion',
    component: PromotionComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    StudentsComponent,
    NewComponent,
    DetailsComponent,
    PromotionComponent
  ]
})
export class StudentsModule {}
