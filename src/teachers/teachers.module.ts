import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './containers/teachers/teachers.component';
import { NewComponent } from './containers/new/new.component';
import { DetailsComponent } from './containers/details/details.component';
import { RouterModule, Routes } from '@angular/router';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: TeachersComponent
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
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [TeachersComponent, NewComponent, DetailsComponent]
})
export class TeachersModule {}
