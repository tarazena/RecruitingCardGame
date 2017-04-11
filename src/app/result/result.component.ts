import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from "../objects/cards";
import { cards, cardsOrSumQuestions } from "../objects/mock-questions";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  cardOptions = cards;
  shapes = cardsOrSumQuestions.filter(x => x.value === 1);

  guessCards: Card[];
  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.guessCards = [new Card, new Card, new Card, new Card, new Card]
  }

  guess(s1, n1, s2, n2, s3, n3, s4, n4, s5, n5) {
    // console.log(this.guessCards);
    this.guessCards = [{
      number: n1,
      shape: s1
    }, {
      number: n2,
      shape: s2
    }, {
      number: n3,
      shape: s3
    }, {
      number: n4,
      shape: s4
    }, {
      number: n5,
      shape: s5
    }];
    console.log(this.guessCards);
  }

}
