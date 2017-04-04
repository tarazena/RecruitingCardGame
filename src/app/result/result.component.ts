import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  cards = this.cardsService.getCards();

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

}
