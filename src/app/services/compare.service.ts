import { CardsService } from "./cards.service";
import { Shapes, Color } from "../objects/cards";
import { Injectable } from '@angular/core';
import { LogService } from "./log.service";
import * as _ from 'lodash'; 

@Injectable()
export class CompareService {

    constructor(private cardsService: CardsService,
        private logService: LogService) {
    }

    cards = this.cardsService.getCards().then(x => this.cards = x);

    ask(q1, q2, q3, q4?, q5?) {
        // console.log('Compare Service, Ask!');
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
        // console.log('Compare Service, running how many');
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
                filteredValu = this.cards.filter(card => _.isEqual(card.shape, q2.selectedOptions[0].getAttribute('selectedshape').value)).map(x => x.number);
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

    private operation(filteredValue: number[], q4, q5) {
        console.log('Compare Service, running operation');
        let result;
        switch (q4.selectedOptions[0].innerText) {
            case '>=':
                result = filteredValue.filter(x => x >= q5.selectedOptions[0].value).length;
                break;
            case '>':
                result = filteredValue.filter(x => x > q5.selectedOptions[0].value).length;
                break;
            case '=':
                result = filteredValue.filter(x => x === parseInt(q5.selectedOptions[0].value)).length;
                break;
            case '<':
                result = filteredValue.filter(x => x < q5.selectedOptions[0].value).length;
                break;
            case '<=':
                result = filteredValue.filter(x => x <= q5.selectedOptions[0].value).length;
                break;

            default:
                break;
        }
        this.logService.addAnswer(result);
    }

    private howManyThreeQuestions(q2) {
        // console.log('Compare Service, running how many three Q\'s');
        let result;
        switch (q2.selectedOptions[0].value) {
            case '1':
                // shapes
                result = this.cards.map(card =>
                        card.shape).filter(shape => 
                            shape === parseInt(q2.selectedOptions[0].getAttribute('selectedShape'))).length;
                break;
            case '4': case '5':
                // color
                result = this.cards.map(card => card.color).filter(color => Color[color] === (q2.selectedOptions[0].innerText.split(" ")[0])).length;
                break;
            case '6':
                // Face Cards
                result = this.cards.map(card => card.number).filter(number => number >= 11).length;
                break;
            case '7':
                // even cards
                result = this.cards.map(card => card.number).filter(number => number % 2 === 0).length;
                break;
            case '8':
                // odd cards
                result = this.cards.map(card => card.number).filter(number => number % 2 !== 0).length;
                break;
            default:
                break;
        }
        this.logService.addAnswer(result);
    }

    private runWhatIsThe(q2) {
        // console.log('Compare Service, Running What is the');
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
       let result = this.cards.map(card => card.number).reduce((f, l) => f + l);
       this.logService.addAnswer(result);
    }

    private product() {
        let result = this.cards.map(card => card.number).reduce((f, l) => f * l);
        this.logService.addAnswer(result);
    }
}