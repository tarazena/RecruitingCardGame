import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../objects/cards';
import { areOrQuestionMark, cards, cardsOrSumQuestions, howManyOrWhatQuestions, operations } from '../objects/mock-questions';
import { Question } from '../objects/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  cards: Card[];
  question: Question;

  howManyDropDown = howManyOrWhatQuestions;
  cardsOrSumDropDown = cardsOrSumQuestions;
  areOrQuestion = areOrQuestionMark;
  operation = operations;
  card = cards;

  constructor(private genratedCards: CardsService) { }

  ngOnInit() {
    this.cards = this.genratedCards.getCards();
  }

}
