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

    private runWhatIsThe(q2) {
        switch (q2) {
            case 1: this.sum();
                break;
            case 2:
                break;
            default:
                break;
        }
    }

    private sum() {
        let x = this.cards.reduce((f,l) => f.number + l.number, 0);
    }
}