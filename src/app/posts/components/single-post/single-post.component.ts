import { ToasterService } from './../../../shared/services/toaster.service';
import { Post } from './../../Post-interface';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {

  post: Post; // Posts Object
  loading: boolean; // Loading Flag
  alive = true; // Alive flag for unsubscribe observables, It equals true to allow subscribes

  /**
   * SinglePostComponent
   * @param postsService PostsService
   * @param activatedRoute ActivatedRoute
   * @param router Router
   * @param toaster ToasterService
   */
  constructor(private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToasterService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.fetchPost(params.id);
      }
    })
  }

  /**
   * Get Post from posts service
   */
  fetchPost(id) {
    this.postsService.getPost(id).subscribe((data: Post) => {
      this.post = data;
    });
  }


  /**
   * Fires when [edit, delete] buttons clicked
   * @param event carry {id, type}
   */
  buttonClicked(event) {
    switch (event.type) {
      case 'view': return;
      case 'edit': this.navigateToEditPost(event.id);
        break;
      case 'delete': this.deletePost(event.id);
        break;
    }
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
 * Route to edit post
 * @param postId post id
 */
  navigateToEditPost(postId) {
    this.router.navigate([`/posts/edit/${postId}`]);
  }

  /**
   * Equals alive varible to false to stop subscriptions
   */
  ngOnDestroy() {
    this.alive = false;
  }

}
