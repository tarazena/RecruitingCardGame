import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../objects/cards';
import { areOrQuestionMark, cards, cardsOrSumQuestions, howManyOrWhatQuestions, operations } from '../objects/mock-questions';
import { Question } from '../objects/questions';
import { SecondQuestionPipe, ThirdQuestionPipe } from '../pipes/questionsPipes';
import { QuestionService } from '../services/questions.service';
import { CompareService } from "../services/compare.service";


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

  constructor(private genratedCards: CardsService,
    private questionService: QuestionService,
    private compareService: CompareService) {

  }

  ngOnInit() {
    this.questionService.getCardsOrSumQuestions().then(x => this.cardsOrSumDropDown = x);
    this.questionService.getHowManyOrWhatQuestions().then(x => this.howManyDropDown = x);
    this.questionService.getAreOrQuestionMark().then(x => this.areOrQuestion = x);
    this.questionService.getOperations().then(x => this.operation = x);
    this.questionService.getCards().then(x => this.card = x)
    // this.genratedCards.getCards().then(x => this.cards = x);
  }

  changeValue(ele, val) {
    // console.log("ele.value = " + ele.value + ", val = " + val);
    // ele.value = val;
  }

  enableThirdQuestion(value) {
    console.log('enable Third Question: ' + value);
    switch (parseInt(value)) {
      case 1: case 3: case 4: {
        this.setShowOrHideQuestions(true, false);
        break;
      }
      case 2: {
        this.setShowOrHideQuestions(true, true);
        break;
      }
      case 0: {
        this.setShowOrHideQuestions(false, false);
        break;
      }
      default:
        this.setShowOrHideQuestions(false, false);
        break;
    }
  }
  resetThirdQuestion(thirdQuestion) {
    console.log('reset');
    console.log(typeof thirdQuestion);
    if (typeof thirdQuestion !== 'undefined') {
      console.log('Third Question: ' + thirdQuestion.value);
      thirdQuestion.value = '';
    }
  }
  setShowOrHideQuestions(thirdQuestion: boolean, fourthAndFifthQuestion: boolean) {
    this.showThirdQuestion = thirdQuestion;
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
      if (typeof q4 !== 'undefined' && typeof q5 !== 'undefined') {
        console.log('Asking 5 Qs');
        this.compareService.ask(q1, q2, q3, q4, q5);
      } else {
        console.log('Asking 3 Qs');
        this.compareService.ask(q1, q2, q3);
      }
    } else {
      // It means there isnt selections
      return;
    }
  }
}
