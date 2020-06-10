import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
      }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }