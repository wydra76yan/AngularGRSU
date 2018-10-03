import { ReviewsModel } from './reviews-model';

export const ReviewsList: ReviewsModel[] = [
  {
    id: 0,
    countryName: 'Польша',
    universityList: [
      {
        id: 0,
        universityName: 'Университет Белостока',
        reviewsList: [
          {
            id: 0,
            description: 'Best ever',
            date: '01/01/1998',
            author: 'Bunny',
          },
          {
            id: 1,
            description: 'w Best not ever',
            date: '01/01/1998',
            author: 'Bunny',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Варшавская Школа Экономики SGH ',
        reviewsList: [
          {
           id: 0,
           description: 'y Norm',
           date: '01/01/1998',
           author: 'Ghy',
          },
          {
            id: 1,
            description: 'd Not Norm',
            date: '01/01/1998',
            author: 'Ghy',
           }
        ]
      },
      {
        id: 0,
        universityName: 'Факультет Педагогики и Искусств',
        reviewsList: [{
            id: 0,
            description: 'r Best ever',
            date: '01/01/1998',
            author: 'Bunny',
          },
          {
            id: 1,
            description: 'a Not Best ever',
            date: '01/01/1998',
            author: 'Bunny',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Поморский Университет в Слупске',
        reviewsList: [{
            id: 0,
            description: 'p kek cheburek',
            date: '01/01/1998',
            author: 'Ghy',
          }
        ]
      },
    ]
  },
  {
    id: 0,
    countryName: 'Литва',
    universityList: [
      {
        id: 0,
        universityName: 'Каунасский Технологический Колледж',
        reviewsList: [{
            id: 0,
            description: 'i Norm',
            date: '01/01/1998',
            author: 'Pani',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Университет Миколаса Рёмериса ',
        reviewsList: [{
            id: 0,
            description: 'd Best ever',
            date: '01/05/1968',
            author: 'Bunny',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Университет Клайпеды',
        reviewsList: [{
            id: 0,
            description: 'o Lol',
            date: '01/01/1998',
            author: 'Pani',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Университет в Шауляй',
        reviewsList: [
          {
            id: 0,
            description: 'r Norm',
            date: '01/01/1998',
            author: 'Pani',
          }
        ]
      },
    ]
  },
];
