import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post;
  @Output() titleClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
