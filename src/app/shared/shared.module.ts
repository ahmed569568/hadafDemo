import { RouterModule } from '@angular/router';
import { PostCardComponent, NavbarComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [PostCardComponent, NavbarComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports: [PostCardComponent, NavbarComponent],
})
export class SharedModule { }
