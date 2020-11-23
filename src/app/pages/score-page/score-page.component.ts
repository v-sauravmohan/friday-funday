import { Component, OnInit } from '@angular/core';
import { FirebaseService, Group } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {

  groupData: any = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getGroups()
    .subscribe(groups => this.groupData = groups);
  }
}
