export class ReviewsModel {
  id: number;
  countryName: string;
  universityList: [{
    id: number;
    universityName: string;
    reviewsList: [{
      id: number;
      reviewContent: {
        description: string;
        date: string;
        author: string;
      };
    }];
  }];
}
