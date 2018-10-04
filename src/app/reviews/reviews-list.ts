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
            description: '   В 2017 году мне посчастливилось стать студенткой одного из вузов Польши – Университета прикладных наук в Ломже – в рамках стипендиальной программы академического обмена Erasmus+.\n' +
            '    Это незабываемый опыт, воспоминания о котором останутся в моей памяти навсегда. Благодаря данной программе я смогла изучить новые для себя дисциплины и технологии, которых нет в рамках учебной программы нашего университета. Учиться было довольно нелегко, но очень интересно. Одной из главных проблем в обучении была проблема разъяснения материала, так как не все преподаватели и ученики знали английский язык. Но мне повезло, так как я хорошо знаю польский язык, поэтому часто слушала лекцию на польском, а потом переводила своим друзьям с других стран на английский.\n' +
            '   В паре строчек не объяснить какое это было чудесное время. Не было ни одного дня, чтобы мы скучали: путешествия, спортивные состязания, активный отдых, экскурсии, квесты, проводимые в нашем общежитии. Благодаря этому шансу у меня появилось много хороших знакомых и я встретила своих лучших друзей, к которым я теперь езжу при любом удобном случаи. \n' +
            '   Одной из наших традиций в Польше было собираться практически каждый вечер с друзьями у кого-нибудь в комнате и смотреть фильмы на английском языке. Иногда мы играли в «крокодила», иногда просто каждый делился музыкой своей страны, либо учил нас словам на их родном языке. \n' +
            '   Поэтому после 3,5 месяцев обучения по программе было крайне тяжело прощаться с друзьями и всей той атмосферой, которую создал университет нам. \n' +
            '   Поэтому если вы сомневаетесь пробовать, либо нет, мой ответ всегда один: «Однозначно да!».\n',
            date: '01/01/1998',
            author: 'anihilator',
          },
          {
            id: 1,
            description: 'Mar oileanach, urrainn dhomh na leanas a ràdh. Ìre foghlaim agus ped. Sgrìobhadh - airson a chuir gu math, chan ann gu mòr.',
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
           description: 'Ikasle gisa, honako hau esan dezaket. Heziketa maila eta ped. Konposizioa - apur bat jartzea, ez oso.',
           date: '01/01/1998',
           author: 'Ghy',
          },
          {
            id: 1,
            description: 'As a student, I can say the following. Level of education and ped. Composition - to put it mildly, not very much.',
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
            description: 'ווי אַ תּלמיד, איך קענען זאָגן די פאלגענדע. גלייַך פון בילדונג און פּעד. זאַץ - צו לייגן עס מיילדלי, נישט זייער פיל.',
            date: '01/01/1998',
            author: 'Bunny',
          },
          {
            id: 1,
            description: 'Diákként elmondhatom a következőket. Az oktatás színvonala és ped. Összetétel - enyhén szólva',
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
            description: 'Като студент мога да кажа следното. Ниво на образование и преподаване. Композиция - да я сложиш леко, не много',
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
            description: 'Là một sinh viên, tôi có thể nói như sau. Trình độ học vấn và giáo dục. Thành phần - để đặt nó nhẹ nhàng, không phải là rất nhiều.',
            date: '01/01/1998',
            author: 'Pani',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Университет Миколаса Рёмериса',
        reviewsList: [{
            id: 0,
            description: 'Mar oileanach, urrainn dhomh na leanas a ràdh. Ìre foghlaim agus ped. Sgrìobhadh - airson a chuir gu math, chan ann gu mòr.',
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
            description: 'ווי אַ תּלמיד, איך קענען זאָגן די פאלגענדע. גלייַך פון בילדונג און פּעד. זאַץ - צו לייגן עס מיילדלי, נישט זייער פיל.',
            date: '01/01/1998',
            author: 'Pani',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Университет в Шауляй',
        reviewsList: [{
            id: 0,
            description: 'Като студент мога да кажа следното. Ниво на образование и преподаване. Композиция - да я сложиш леко, не много',
            date: '01/01/1998',
            author: 'Pani',
          }
        ]
      },
    ]
  },
  {
    id: 0,
    countryName: 'Чехия',
    universityList: [
      {
        id: 0,
        universityName: 'Университет Палацкого',
        reviewsList: [{
            id: 0,
            description: 'As a student, I can say the following. Level of education and ped. Composition - to put it mildly, not very much.',
            date: '01/01/1998',
            author: 'Pani',
          }
        ]
      },
      {
        id: 0,
        universityName: 'Университет в Пардубице',
        reviewsList: [{
          id: 0,
          description: 'Как студент, могу сказать следующее. Уровень образования и пед. состав - мягко скажем не очень.',
          date: '01/05/1968',
          author: 'Bunny',
        }
        ]
      },
    ]
  },
  {
    id: 0,
    countryName: 'Румыния',
    universityList: [
      {
        id: 0,
        universityName: 'Университет Питешти',
        reviewsList: [{
          id: 0,
          description: 'Sicut discipulus, non possum dicere sequentibus. Level educationis ped. structure - ut levissime dicam, non est valde.\n',
          date: '01/01/1998',
          author: 'Pani',
        }
        ]
      },
      {
        id: 0,
        universityName: 'Университет имени Александра Иона Кузы в Яссы',
        reviewsList: [{
          id: 0,
          description: 'Sicut discipulus, non possum dicere sequentibus. Level educationis ped.',
          date: '01/05/1968',
          author: 'Bunny',
        }
        ]
      },
      {
        id: 0,
        universityName: 'Университет ветеринариной медицины имени Короля Михала Первого',
        reviewsList: [{
          id: 0,
          description: 'Як студэнт, магу сказаць наступнае. Ўзровень адукацыі і пед. склад - мякка скажам не вельмі.',
          date: '01/05/1968',
          author: 'Bunny',
        }
        ]
      },
    ]
  },
  {
    id: 0,
    countryName: 'Испания',
    universityList: [
      {
        id: 0,
        universityName: 'Университет Гранады',
        reviewsList: [{
          id: 0,
          description: 'Là một sinh viên, tôi có thể nói như sau. Trình độ học vấn và giáo dục. Thành phần - để đặt nó nhẹ nhàng',
          date: '01/01/1998',
          author: 'Pani',
        }
        ]
      },
      {
        id: 0,
        universityName: 'Университет Вальядолида',
        reviewsList: [{
          id: 0,
          description: 'As studint kin ik de folgjende sizze. Nivo fan oplieding en ped. Komposysje - it leuk, net folle.',
          date: '01/05/1968',
          author: 'Bunny',
        }
        ]
      },
    ]
  },
];
