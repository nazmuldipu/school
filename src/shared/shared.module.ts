import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService } from './services/navbar.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [NavbarService]
})
export class SharedModule {}
