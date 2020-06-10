import { Post } from './../../Post-interface';
import { ToasterService } from './../../../shared/services/toaster.service';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeWhile, finalize } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  alive = true; // Alive flag for unsubscribe observables, It equals true to allow subscribes
  loading: boolean; // Loading Flag
  postId: number; // Post id

  /**
   * PostFormComponent
   * @param fb FormBuilder
   * @param postsService PostsService
   * @param activatedRoute ActivatedRoute
   * @param router Router
   * @param toaster ToasterService
   */
  constructor(private fb: FormBuilder,
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToasterService) { }

  ngOnInit(): void {
    this.loading = true;
    this.createForm();
    this.activatedRoute.params.pipe(takeWhile(() => this.alive)).subscribe(params => {
      if (params.id) {
        this.postId = params.id;
        this.postsService.getPost(params.id).pipe(takeWhile(() => this.alive)).subscribe((data: Post) => {
          this.injectFormData(data);
          this.loading = false;
        })
      }
    })
  }

  /**
   * Create form using the form builder
   */
  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  /**
   * Fill form with post data using patchValue
   * @param post 
   */
  injectFormData(post: Post) {
    this.form.patchValue(post);
  }

  /**
   * Form Submission
   */
  submit() {
    this.loading = true;
    this.postsService.updatePost(this.postId, this.form.value).pipe(
      takeWhile(() => this.alive),
      finalize(() => {
        this.router.navigate(['/']);
        this.loading = false;
      })).subscribe(() => {
        this.toaster.showToast({
          text: 'Post Updated!',
          caption: 'Successfully',
          type: 'success',
          duration: 2000
        })
      });
  }

  
  /**
   * Equals alive varible to false to stop subscriptions
   */
  ngOnDestroy() {
    this.alive = false;
  }
}
