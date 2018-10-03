import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-review',
  templateUrl: './reviews-review.component.html',
  styleUrls: ['./reviews-review.component.css']
})
export class ReviewsReviewComponent implements OnInit {
  @Input() university;

  constructor() { }

  ngOnInit() {
  }

}
