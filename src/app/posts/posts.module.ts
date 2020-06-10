import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent, SinglePostComponent, PostFormComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostsListComponent, SinglePostComponent, PostFormComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [PostsListComponent]
})
export class PostsModule { }
