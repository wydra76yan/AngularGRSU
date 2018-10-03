export class ReviewsModel {
  id: number;
  countryName: string;
  universityList: university[];
}

class university {
  id: number;
  universityName: string;
  reviewsList: review[];
}

class review {
  id: number;
  description: string;
  date: string;
  author: string;
}
