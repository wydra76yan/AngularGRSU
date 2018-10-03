import { Component, Input, OnInit } from '@angular/core';
import { ReviewsModel } from '../reviews/reviews-model';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  @Input() country;
  selectedUniversity;

  constructor() { }

  onSelect(university): void {
    this.selectedUniversity = university;
  }

  ngOnInit() {
  }

}
