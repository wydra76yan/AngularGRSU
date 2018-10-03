import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsReviewComponent } from './reviews-review.component';

describe('ReviewsReviewComponent', () => {
  let component: ReviewsReviewComponent;
  let fixture: ComponentFixture<ReviewsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
