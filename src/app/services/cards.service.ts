import { Card, CardNumbers, Shapes, Color } from '../objects/cards';
import { Injectable } from '@angular/core';

@Injectable()

export class CardsService {
    didGenerateCards: boolean;
    generatedCards: Card[];

    constructor() {
        this.didGenerateCards = false;
        this.generatedCards = [];
    }

    getCards(): Promise<Card[]> {
        if (!this.didGenerateCards) {
            let randomCards: Card[] = [];
            let isThere = false;
            while (randomCards.length < 5) {
                let card: Card = this.generateRandomCard();
                randomCards.map(x => {
                    if (x === card) {
                        isThere = true;
                    }
                });
                if (!isThere) {
                    randomCards.push(card);
                }
                isThere = false;
            }
            this.didGenerateCards = true;
            this.generatedCards = randomCards;
            return Promise.resolve(randomCards);
        } else {
            return Promise.resolve(this.generatedCards);
        }
    }

    getCardsContainingStrings(): Promise<Card[]> {
        return Promise.resolve(this.generatedCards.map(function (x) {
            x.color = Color[x.color];
            x.shape = Shapes[x.shape];
            return x;
        }))
    }

    private generateRandomCard(): Card {
        let randomCard: Card = { number: 1, shape: 2, color: 1 };
        randomCard.number = this.randomIntFromInterval(1, 13);
        randomCard.shape = this.randomIntFromInterval(1, 4);
        randomCard.color = this.randomIntFromInterval(1, 2);
        console.log(randomCard.number + " " + randomCard.shape + " " + randomCard.color);
        return randomCard;
    }

    private randomIntFromInterval(min, max): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}


