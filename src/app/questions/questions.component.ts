import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../objects/cards';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  cards: Card[];

  constructor(private genratedCards: CardsService) { }

  ngOnInit() {
    this.cards = this.genratedCards.getCards();
  }

}
