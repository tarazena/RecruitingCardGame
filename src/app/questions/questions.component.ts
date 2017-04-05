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
  showThirdQuestion = false;
  showFouthAndFifthQuestion = false;

  howManyDropDown = howManyOrWhatQuestions;
  cardsOrSumDropDown = cardsOrSumQuestions;
  areOrQuestion = areOrQuestionMark;
  operation = operations;
  card = cards;

  constructor(private genratedCards: CardsService) { }

  ngOnInit() {
    this.genratedCards.getCards().then(x => this.cards = x);
  }

  askQuestion() {
    /*this function should call two services
      one service should update the console log,
      the other should call the questionService,
      the question service will analyze the question,
      will call the CardsService and compare the results.
    */
  }

  getFirstQuestion(value) {
    this.cardsOrSumDropDown = cardsOrSumQuestions;
    switch (value) {
      case '1': {
        this.cardsOrSumDropDown = this.cardsOrSumDropDown.slice(1, 10);
         this.areOrQuestion = areOrQuestionMark;
        this.showThirdQuestion = false;
        break;
      }
      case '2': {
        this.cardsOrSumDropDown = this.cardsOrSumDropDown.slice(10, 12);
        this.areOrQuestion = this.areOrQuestion.slice(2, 3);
        this.showThirdQuestion = true;
        break;
      }
      default: {
        this.cardsOrSumDropDown = cardsOrSumQuestions;
      }
    }
  }

  getSecondQuestion(value) {
    this.areOrQuestion = areOrQuestionMark;
    switch (parseInt(value)) {
      case 1: case 2: case 3: case 4: {
        this.areOrQuestion = areOrQuestionMark;
        this.showThirdQuestion = true;
        this.showFouthAndFifthQuestion = false;
        break;
      }
      case 5: {
        this.areOrQuestion = this.areOrQuestion.slice(1, 2);
        this.showThirdQuestion = true;
        this.showFouthAndFifthQuestion = true;
        break;
      }
      case 6: case 7: case 8: case 9: case 10: {
        this.areOrQuestion = this.areOrQuestion.slice(0, 1);
        this.showThirdQuestion = true;
        this.showFouthAndFifthQuestion = false;
        break;
      }
      case 11: case 12: {
        this.areOrQuestion = this.areOrQuestion.slice(2, 3);
        this.showThirdQuestion = true;
        this.showFouthAndFifthQuestion = false;
        break;
      }
      default: this.areOrQuestion = areOrQuestionMark;
        this.showThirdQuestion = false;
        this.showFouthAndFifthQuestion = false;
        break;
    }
  }

  getThirdQuestion(value) {
    switch (parseInt(value)) {
      case 1: case 3:
        this.showFouthAndFifthQuestion = false;
        break;
      case 2: 
        this.showFouthAndFifthQuestion = true;
      default:
        this.showFouthAndFifthQuestion = false;
        break;
    }
  }
}
