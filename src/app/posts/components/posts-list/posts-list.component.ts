import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: any;
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.fetchPosts()
  }

  fetchPosts() {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  navigateToPost(postId) {
    this.router.navigate([`/posts/view/${postId}`]);
  }
}
