import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${environment.serverUrl}/posts`);
}
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}