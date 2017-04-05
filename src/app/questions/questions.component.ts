import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../objects/cards';
import { areOrQuestionMark, cards, cardsOrSumQuestions, howManyOrWhatQuestions, operations } from '../objects/mock-questions';
import { Question } from '../objects/questions';
import { SecondQuestionPipe } from '../pipes/questionsPipes';
import { QuestionService } from '../services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [SecondQuestionPipe, QuestionService]
})

export class QuestionsComponent implements OnInit {
  cards: Card[];
  question: Question;
  showThirdQuestion = false;
  showFouthAndFifthQuestion = false;
  cardsOrSumDropDown;
  howManyDropDown;
  areOrQuestion;
  operation;
  card;

  constructor(private genratedCards: CardsService, private questionService: QuestionService) {

  }

  ngOnInit() {
    this.questionService.getCardsOrSumQuestions().then(x => this.cardsOrSumDropDown = x);
    this.questionService.getHowManyOrWhatQuestions().then(x => this.howManyDropDown = x);
    this.questionService.getAreOrQuestionMark().then(x => this.areOrQuestion = x);
    this.questionService.getOperations().then(x => this.operation = x);
    this.questionService.getCards().then(x => this.card = x)
    // this.genratedCards.getCards().then(x => this.cards = x);
  }

  changeValue(val) {
    this.howManyDropDown.value = val;
    console.log('Action:' + this.howManyDropDown.value);
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
      case 1: {
        this.areOrQuestion = areOrQuestionMark;
        this.showThirdQuestion = true;
        this.showFouthAndFifthQuestion = false;
        break;
      }
      case 2: {
        this.areOrQuestion = this.areOrQuestion.slice(1, 2);
        this.showThirdQuestion = true;
        this.showFouthAndFifthQuestion = true;
        break;
      }
      case 4: {
        this.areOrQuestion = this.areOrQuestion.slice(0, 1);
        this.showThirdQuestion = true;
        this.showFouthAndFifthQuestion = false;
        break;
      }
      case 3: {
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
