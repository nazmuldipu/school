import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsComponent } from './containers/parents/parents.component';
import { RouterModule, Routes } from '@angular/router';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: ParentsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [ParentsComponent]
})
export class ParentsModule {}
