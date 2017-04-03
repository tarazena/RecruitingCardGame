import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [CardsService]
})
export class QuestionsComponent implements OnInit {
  cards = this.cardService.getCards();

  constructor(private cardService: CardsService) { }

  ngOnInit() {
  }

}
