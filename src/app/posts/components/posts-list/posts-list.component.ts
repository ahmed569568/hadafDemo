import { ToasterService } from './../../../shared/services/toaster.service';
import { Post } from './../../Post-interface';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  posts: Post[]; // Posts Array
  loading: boolean; // Loading Flag
  alive = true; // Alive flag for unsubscribe observables, It equals true to allow subscribes

  /**
   * PostsListComponent
   * @param postsService PostsService
   * @param router Router
   * @param toaster ToasterService
   */
  constructor(private postsService: PostsService, private router: Router, private toaster: ToasterService) { }

  ngOnInit() {
    this.fetchPosts()
  }

  /**
   * Get Posts from posts service
   */
  fetchPosts() {
    this.loading = true;
    this.postsService.getPosts().pipe(takeWhile(() => this.alive)).subscribe((data: Post[]) => {
      this.posts = data;
      this.loading = false;
    });
  }

  /**
   * Fires when [edit, delete, view] buttons clicked
   * @param event carry {id, type}
   */
  buttonClicked(event) {
    switch (event.type) {
      case 'view': this.navigateToPost(event.id);
        break;
      case 'edit': this.navigateToEditPost(event.id);
        break;
      case 'delete': this.deletePost(event.id);
        break;
    }
  }

  /**
   * Route to single post
   * @param postId post id
   */
  navigateToPost(postId) {
    this.router.navigate([`/posts/view/${postId}`]);
  }

  /**
 * Route to edit post
 * @param postId post id
 */
  navigateToEditPost(postId) {
    this.router.navigate([`/posts/edit/${postId}`]);
  }

  /**
   * delete post from posts service
   * @param id post id
   */
  deletePost(id) {
    this.loading = true;
    this.postsService.deletePost(id).pipe(takeWhile(() => this.alive)).subscribe(() => {
      this.toaster.showToast({
        text: 'Post Deleted!',
        caption: 'Successfully',
        type: 'success',
        duration: 1000
      })
      this.loading = false;
    })
  }

  /**
   * Equals alive varible to false to stop subscriptions
   */
  ngOnDestroy() {
    this.alive = false;
  }
}
