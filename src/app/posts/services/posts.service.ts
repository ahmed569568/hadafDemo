import { Post } from './../Post-interface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  /**
   * PostsService
   * @param http http client service
   */
  constructor(private http: HttpClient) { }

  /**
   * Get Post Data by ID
   * @param id Post id
   */
  getPost(id) {
    return this.http.get(`${environment.serverUrl}/posts/${id}`);
  }

  /**
   * Get all Posts
   */
  getPosts() {
    return this.http.get(`${environment.serverUrl}/posts`);
  }

  /**
   * Update post, Using JSON.stringify to covert the onject to string
   * @param id post id
   * @param body post new body
   */
  updatePost(id: number, body: Post) {
    return this.http.put(`${environment.serverUrl}/posts/${id}`, JSON.stringify(body));
  }

  /**
   * Delete post
   * @param id post id
   */
  deletePost(id) {
    return this.http.delete(`${environment.serverUrl}/posts/${id}`);
  }
}