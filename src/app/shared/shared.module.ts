import { PostCardComponent, NavbarComponent, LoadingComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
@NgModule({
  declarations: [PostCardComponent, NavbarComponent, LoadingComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports: [PostCardComponent, NavbarComponent, LoadingComponent],
})
export class SharedModule { }
