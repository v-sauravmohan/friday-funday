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
        image: 'assets/Geogy.png'
      },
      {
        name: 'Sreejith',
        image: 'assets/Sreejith.png'
      },
      {
        name: 'Manoj',
        image: 'assets/manoj.png'
      },
      {
        name: 'Nithya',
        image: 'assets/Nithya.png'
      }
    ],
    [
      {
        name: 'Riya',
        image: 'assets/Riya.png'
      },
      {
        name: 'Amina',
        image: 'assets/amina.png'
      },
      {
        name: 'Aneeka',
        image: 'assets/Aneeka.png'
      },
      {
        name: 'Gokul',
        image: 'assets/Gokul.png'
      }
    ],
    [
      {
        name: 'Manu',
        image: 'assets/Manu.png'
      },
      {
        name: 'Vineesh',
        image: 'assets/Vineesh.png'
      },
      {
        name: 'Ramees',
        image: 'assets/Ramees.png'
      },
      {
        name: 'Sujesh',
        image: 'assets/Sujesh.png'
      }
    ],
    [
      {
        name: 'Rahul',
        image: 'assets/Rahul.png'
      },
      {
        name: 'Swathy',
        image: 'assets/Swathy.png'
      },
      {
        name: 'Saurav',
        image: 'assets/Saurav.png'
      },
      {
        name: 'Jessin',
        image: 'assets/Jessin.png'
      }
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
