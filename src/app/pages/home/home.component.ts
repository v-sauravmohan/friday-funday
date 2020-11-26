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
        image: 'assets/sponsors/Geogy.png'
      },
      {
        name: 'Sreejith',
        image: 'assets/sponsors/Sreejith.png'
      },
      {
        name: 'Manoj',
        image: 'assets/sponsors/manoj.png'
      },
      {
        name: 'Nithya',
        image: 'assets/sponsors/Nithya.png'
      }
    ],
    [
      {
        name: 'Riya',
        image: 'assets/sponsors/Riya.png'
      },
      {
        name: 'Amina',
        image: 'assets/sponsors/amina.png'
      },
      {
        name: 'Aneeka',
        image: 'assets/sponsors/Aneeka.png'
      },
      {
        name: 'Gokul',
        image: 'assets/sponsors/Gokul.png'
      }
    ],
    [
      {
        name: 'Manu',
        image: 'assets/sponsors/Manu.png'
      },
      {
        name: 'Vineesh',
        image: 'assets/sponsors/Vineesh.png'
      },
      {
        name: 'Ramees',
        image: 'assets/sponsors/Ramees.png'
      },
      {
        name: 'Sujesh',
        image: 'assets/sponsors/Sujesh.png'
      }
    ],
    [
      {
        name: 'Rahul',
        image: 'assets/sponsors/Rahul.png'
      },
      {
        name: 'Swathy',
        image: 'assets/sponsors/Swathy.png'
      },
      {
        name: 'Saurav',
        image: 'assets/sponsors/Saurav.png'
      },
      {
        name: 'Jessin',
        image: 'assets/sponsors/Jessin.png'
      }
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
