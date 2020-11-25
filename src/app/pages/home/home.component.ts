import { Component, OnInit } from '@angular/core';

export interface Sponsor {
  name: string;
  image: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sponsors: any = [
    [
      {
        name: 'Geogy',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Sreejith',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Manoj',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Nithya',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      }
    ],
    [
      {
        name: 'Riya',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Amina',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Aneeka',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Gokul',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      }
    ],
    [
      {
        name: 'Manu',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Vineesh',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Ramees',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Sujesh',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      }
    ],
    [
      {
        name: 'Rahul',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        name: 'Saurav',
        image: 'https://www.w3schools.com/howto/img_avatar.png'
      },
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
