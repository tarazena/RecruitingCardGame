import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  cards;
  constructor(private cardsService: CardsService) { 
  }

  ngOnInit() {
    this.cardsService.getCards().then(x => this.cards = x)
  }

}
