import { Injectable, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import * as _ from 'lodash';

@Injectable()

export class GuessService implements OnInit {

    guess: [{}];
    generatedcards = this.cardsService.getCards().then(x => this.generatedcards = x);
    rightGuessed: number;
    constructor(private cardsService: CardsService) { }

    ngOnInit() {
        this.guess = [{}];
        this.generatedcards = [];
        this.rightGuessed = 0;
    }

    guessCards(guessedCards) {
        // console.log('running guessed cards service');
        console.log(guessedCards);
        // console.log('gen cards ' + this.generatedcards);

        this.rightGuessed = 0;
        guessedCards.map(gussedCard => {
            this.generatedcards.map(genCard => {
                // console.log("gun: " + gussedCard.number + ", gen: " + genCard.number + ", gus: " +gussedCard.shape + ", ges: " + genCard.shape)
                if (_.isEqual(parseInt(gussedCard.number), genCard.number) && _.isEqual(parseInt(gussedCard.shape), genCard.shape)) {
                    this.rightGuessed++;
                }
            });
        });

        // console.log('Guessed Cards' + guessedCards);
        // console.log('Generated Cards' + this.generatedcards);

        if (this.rightGuessed === 5) {
            console.log('You solved the gmae');
        } else {
            console.log('Right Cards: ' + this.rightGuessed);
        }
    }

}