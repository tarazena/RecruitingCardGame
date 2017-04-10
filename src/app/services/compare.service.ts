import { CardsService } from "./cards.service";

import { Injectable } from '@angular/core';

@Injectable()

export class CompareService {
    // tslint:disable-next-line:no-trailing-whitespace

    constructor(private cardsService: CardsService) {
    }

    cards = this.cardsService.getCards().then(x => this.cards = x);

    ask(q1, q2, q3, q4?, q5?) {
        switch (q1) {
            case 1:
                break;
            case 2: this.runWhatIsThe(q2);
                break;
            default:
                break;
        }
    }

    private runHowMany(q2, q3, q4?, q5?) {
        console.log('Compare Service, running how many');
        switch (q3) {
            case '?': this.howManyThreeQuestions(q2);
                break;
            case 'are':
                break;
            default:
                break;
        }
    }

    private howManyFiveQuestions(q2, q4, q5) {}

    private operation() {}

    private howManyThreeQuestions(q2) {
        console.log('Compare Service, running how many three Q\'s');
        switch (q2) {
            case '1':
                // shapes
                console.log(this.cards.map(card => card.shapes).filter(shape => shape === q2));
                break;
            case '2':
                // color
                console.log(this.cards.map(card => card.color).filter(color => color === q2));
                break;
            case '3':
                // Face Cards
                console.log(this.cards.map(card => card.number).filter(number => number >= 11));
                break;
            case '4':
                // even cards
                console.log(this.cards.map(card => card.number).filter(number => number % 2 === 0));
                break;
            case '5':
                // odd cards
                console.log(this.cards.map(card => card.number).filter(number => number % 2 !== 0));
                break;
            default:
                break;
        }
    }

    private runWhatIsThe(q2) {
        console.log('Compare Service, Running What is the');
        switch (q2) {
            case 1: this.sum();
                break;
            case 2: this.product();
                break;
            default:
                break;
        }
    }

    private sum() {
        console.log(this.cards.map(card => card.number).reduce((f, l) => f + l));
    }

    private product() {
        console.log(this.cards.map(card => card.number).reduce((f, l) => f * l));
    }
}