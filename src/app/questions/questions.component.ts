import { Component, OnInit } from '@angular/core';
import { GeneratedCards, getGeneratedCards } from '../globals/globalCards';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [GeneratedCards]
})
export class QuestionsComponent implements OnInit {

  constructor(private genratedCards: GeneratedCards) { }

  cards = getGeneratedCards();
  ngOnInit() {
  }

}
