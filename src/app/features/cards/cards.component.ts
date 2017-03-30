import { Component, OnInit } from '@angular/core';
import { Card, DECK } from '../../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  DealFiveCards(DECK): Card[] {
    let HAND: Card[] = [];
    for (let i = 0; i < 5; i++) {
      let pickedCard = Math.floor(Math.random() * 52) + 1;
      HAND.push(DECK[pickedCard]);
    }
    console.log(HAND);
    return HAND;
  }

  constructor() { }

  ngOnInit() {
    this.DealFiveCards(DECK);
  }

}
