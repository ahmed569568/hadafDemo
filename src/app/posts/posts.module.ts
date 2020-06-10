import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent, SinglePostComponent } from './components';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PostsListComponent, SinglePostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [PostsListComponent]
})
export class PostsModule { }
