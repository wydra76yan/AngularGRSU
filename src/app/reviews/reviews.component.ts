import { Component, OnInit } from '@angular/core';
import { ReviewsModel } from './reviews-model';
import { ReviewsList } from './reviews-list';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: ReviewsModel[] = ReviewsList;
  selectedCountry: ReviewsModel;

  constructor() {
  }
  onSelect(country: ReviewsModel): void {
    this.selectedCountry = country;
  }

  ngOnInit() {
  }
}
