import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../objects/cards';
import { areOrQuestionMark, cards, cardsOrSumQuestions, howManyOrWhatQuestions, operations } from '../objects/mock-questions';
import { Question } from '../objects/questions';
import { SecondQuestionPipe, ThirdQuestionPipe } from '../pipes/questionsPipes';
import { QuestionService } from '../services/questions.service';
import { CompareService } from '../services/compare.service';
import { LogService } from '../services/log.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [SecondQuestionPipe, ThirdQuestionPipe, QuestionService],
})

export class QuestionsComponent implements OnInit {
  cards: Card[];
  question: Question;
  showFouthAndFifthQuestion = 'none';
  cardsOrSumDropDown;
  howManyDropDown;
  areOrQuestion;
  operation;
  card;

  constructor(private genratedCards: CardsService,
    private questionService: QuestionService,
    private compareService: CompareService,
    private logService: LogService) {

  }

  ngOnInit() {
    this.questionService.getCardsOrSumQuestions().then(x => this.cardsOrSumDropDown = x);
    this.questionService.getHowManyOrWhatQuestions().then(x => this.howManyDropDown = x);
    this.questionService.getAreOrQuestionMark().then(x => this.areOrQuestion = x);
    this.questionService.getOperations().then(x => this.operation = x);
    this.questionService.getCards().then(x => this.card = x);
    this.genratedCards.getCards().then(x => x.map(y => console.log(y.number + ' ' + y.shape)));
  }

  treve() {
    this.howManyDropDown = this.howManyDropDown;
    this.areOrQuestion = this.areOrQuestion;
    this.setShowOrHideQuestions('none');
  }

  enableThirdQuestion(value) {
    console.log('enable Third Question: ' + value.selectedOptions[0].value);
    this.operation = [];
    this.card = [];
    switch (value.selectedOptions[0].value) {
      case '1': case '3': case '4': {
        this.setShowOrHideQuestions('none');
        break;
      }
      case '2': {
        this.setShowOrHideQuestions('inline-block');
        this.questionService.getOperations().then(x => this.operation = x);
        this.questionService.getCards().then(x => this.card = x);
        break;
      }
      case '0': {
        this.setShowOrHideQuestions('none');
        break;
      }
      default:
        this.setShowOrHideQuestions('none');
        break;
    }
  }

  disableForthAndFifthQ() {
    this.setShowOrHideQuestions('none');
  }
  setShowOrHideQuestions(fourthAndFifthQuestion: string) {
    this.showFouthAndFifthQuestion = fourthAndFifthQuestion;
  }

  askQuestion(q1, q2, q3, q4, q5) {
    /*this function should call two services
      one service should update the console log,
      the other should call the questionService,
      the question service will analyze the question,
      will call the CardsService and compare the results.
    */

    if (typeof q1 !== 'undefined' && typeof q2 !== 'undefined' && typeof q3 !== 'undefined') {
      if ((typeof q4 !== 'undefined' && typeof q5 !== 'undefined') &&
        (q4.length > 0 &&
          q5.length > 0)) {
        // console.log('Asking 5 Qs');
        this.logService.addQuestion(q1.selectedOptions[0].innerText + " " + q2.selectedOptions[0].innerText + " " + q3.selectedOptions[0].innerText + " " + q4.selectedOptions[0].innerText + ' ' + q5.selectedOptions[0].innerText + ' ?')
        this.compareService.ask(q1, q2, q3, q4, q5);
      } else {
        // console.log('Asking 3 Qs');
        this.logService.addQuestion(q1.selectedOptions[0].innerText + ' ' + q2.selectedOptions[0].innerText + ' ' + q3.selectedOptions[0].innerText)
        this.compareService.ask(q1, q2, q3);
      }
    } else {
      // It means there isnt selections
      return;
    }
  }
}
