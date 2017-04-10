import { CardsService } from "./cards.service";
import { Shapes, Color } from "../objects/cards";
import { Injectable } from '@angular/core';

@Injectable()

export class CompareService {
    // tslint:disable-next-line:no-trailing-whitespace

    constructor(private cardsService: CardsService) {
    }

    cards = this.cardsService.getCards().then(x => this.cards = x);

    ask(q1, q2, q3, q4?, q5?) {
        console.log('Compare Service, Ask!');
        switch (q1.selectedOptions[0].value) {
            case '1': this.runHowMany(q2, q3, q4, q5);
                break;
            case '2': this.runWhatIsThe(q2);
                break;
            default:
                break;
        }
    }

    private runHowMany(q2, q3, q4?, q5?) {
        console.log('Compare Service, running how many');
        switch (q3.selectedOptions[0].innerText) {
            case '?': this.howManyThreeQuestions(q2);
                break;
            case 'are': this.howManyFiveQuestions(q2, q4, q5);
                break;
            default:
                break;
        }
    }

    private howManyFiveQuestions(q2, q4, q5) {
        console.log('Compare Service, running how many 5 Q\'s');
        let filteredValu;
        switch (q2.selectedOptions[0].value) {
            case '1':
                // shapes
                filteredValu = this.cards.filter(card => card.shape === q2.selectedOptions[0].innerText).map(x => x.number);
                this.operation(filteredValu, q4, q5);
                break;
            case '2':
                // cards
                filteredValu = this.cards.map(x => x.number);
                this.operation(filteredValu, q4, q5);
                break;
            default:
                break;
        }
    }

    private operation(filteredValue : number[], q4, q5) {
        console.log('Compare Service, running operation');
        switch (q4.selectedOptions[0].innerText) {
            case '>=':
                console.log(filteredValue.filter(x => x >= q5.selectedOptions[0].value).length);
                break;
            case '>':
                console.log(filteredValue.filter(x => x > q5.selectedOptions[0].value).length);
                break;
            case '=':
                console.log(filteredValue.filter(x => x === parseInt(q5.selectedOptions[0].value)).length);
                break;
            case '<':
                console.log(filteredValue.filter(x => x < q5.selectedOptions[0].value).length);
                break;
            case '<=':
                console.log(filteredValue.filter(x => x <= q5.selectedOptions[0].value).length);
                break;

            default:
                break;
        }
    }

    private howManyThreeQuestions(q2) {
        console.log('Compare Service, running how many three Q\'s');
        switch (q2.selectedOptions[0].value) {
            case '1':
                // shapes
                console.log(this.cards.map(card => Shapes[card.shape]).filter(shape => shape === parseInt(q2.selectedOptions[0].getAttribute('selectedShape'))).length);
                break;
            case '4': case '5':
                // color
                console.log(this.cards.map(card => card.color).filter(color => color === (q2.selectedOptions[0].innerText.split(" ")[0])).length);
                break;
            case '6':
                // Face Cards
                console.log(this.cards.map(card => card.number).filter(number => number >= 11).length);
                break;
            case '7':
                // even cards
                console.log(this.cards.map(card => card.number).filter(number => number % 2 === 0).length);
                break;
            case '8':
                // odd cards
                console.log(this.cards.map(card => card.number).filter(number => number % 2 !== 0).length);
                break;
            default:
                break;
        }
    }

    private runWhatIsThe(q2) {
        console.log('Compare Service, Running What is the');
        switch (q2.selectedOptions[0].innerText) {
            case 'Sum': this.sum();
                break;
            case 'Product': this.product();
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