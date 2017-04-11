import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from "../objects/cards";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  guessCards: Card[];
  constructor(private cardsService: CardsService) { 
  }

  ngOnInit() {
    this.guessCards = [new Card, new Card,new Card,new Card,new Card]
  }

}
