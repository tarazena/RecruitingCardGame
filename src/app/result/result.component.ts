import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [CardsService]
})
export class ResultComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  cards = this.cardsService.getCards();

  ngOnInit() {
  }

}
