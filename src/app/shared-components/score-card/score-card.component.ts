import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  @Input() cards:Group;
  constructor() { }

  ngOnInit() {
  }

}
