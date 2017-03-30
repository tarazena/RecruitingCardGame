import { Component } from '@angular/core';
import { Card, DECK } from '../../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards: Card[] = [];

  guess(): boolean {
    return false;
  }

  constructor() {
    this.cards = this.DealFiveCards(DECK);
    console.log(this.cards);
   }

  DealFiveCards(DECK): Card[] {
    let HAND: Card[] = [];
    for (let i = 0; i < 5; i++) {
      let pickedCard = Math.floor(Math.random() * 52);
      HAND.push(DECK[pickedCard]);
    }
    return HAND;
  }

}
