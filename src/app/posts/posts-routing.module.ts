import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PostsListComponent, SinglePostComponent, PostFormComponent } from './components';

const routes: Routes = [
    {path: '', component: PostsListComponent},
    {path: 'view/:id', component: SinglePostComponent},
    {path: 'edit/:id', component: PostFormComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }