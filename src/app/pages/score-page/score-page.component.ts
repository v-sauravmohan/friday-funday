import { Component, OnInit } from '@angular/core';
import { FirebaseService, Group } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {

  groupData: Group[] = [
    {
      "doc_id": "FUaP7NAGZGDCXwbBMht1",
      "group_name": "FANG87",
      "no_of_redeems": 0,
      "points_scored": 3,
      "secret_group_id": "fang87009",
      "image": 'https://lh3.google.com/u/0/d/139TVlNXi7BeEKt6HOSK4VNYodAVSsqzL=w375-k-nu-iv1',
    },
    {
      "doc_id": "Ybz3IX4yRBKxCNg2Idw7",
      "group_name": "SHURIKEN",
      "no_of_redeems": 0,
      "points_scored": 10,
      "secret_group_id": "shuiken123",
      "image": 'https://lh3.google.com/u/0/d/139TVlNXi7BeEKt6HOSK4VNYodAVSsqzL=w375-k-nu-iv1',
    },
    {
      "doc_id": "Zmi3tgiPo5G6hI27jCZL",
      "group_name": "STRYKER",
      "no_of_redeems": 0,
      "points_scored": 20,
      "secret_group_id": "stryker002",
      "image": 'https://lh3.google.com/u/0/d/139TVlNXi7BeEKt6HOSK4VNYodAVSsqzL=w375-k-nu-iv1',
    },
    {
      "doc_id": "aIeXjjHzpVvHpub0Hc9b",
      "group_name": "TOXIX",
      "no_of_redeems": 0,
      "points_scored": 50,
      "secret_group_id": "toxix882",
      "image": 'https://lh3.google.com/u/0/d/139TVlNXi7BeEKt6HOSK4VNYodAVSsqzL=w375-k-nu-iv1',
    }
  ]

  constructor(private firebaseService: FirebaseService) {
    // firebaseService.retereveGroups().then((groupData) => {
    //   this.groupData = groupData;
    //   console.log(groupData)
    //  });
    }
  ngOnInit() {

  }
}