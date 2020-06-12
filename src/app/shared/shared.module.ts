import { PostCardComponent, NavbarComponent, LoadingComponent, BreadcrumbComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@NgModule({
  declarations: [PostCardComponent, NavbarComponent, LoadingComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports: [PostCardComponent, NavbarComponent, LoadingComponent, BreadcrumbComponent],
})
export class SharedModule { }
