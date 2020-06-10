import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsListComponent } from './components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    {path: '/', component: PostsListComponent},
    {path: '/view/:id', component: SinglePostComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }