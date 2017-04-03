import { Card, CardNumbers, Shapes, Color } from '../objects/cards';
import { Injectable } from '@angular/core';
import { GeneratedCards, setGeneratedCards } from '../globals/globalCards';

@Injectable()

export class CardsService {
    generatedCards: GeneratedCards;

    constructor() {}

   getCards(): Card[] {

        let randomCards: Card[] = [];
        let isThere = false;
        while (randomCards.length < 5) {
            let card: Card = generateRandomCard();
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
        setGeneratedCards(randomCards);
        return randomCards;
    }
}

function generateRandomCard(): Card {
    let randomCard: Card = { number: 1, shape: 2, color: 1};
    randomCard.number = randomIntFromInterval(1, 13);
    randomCard.shape = randomIntFromInterval(1, 4);
    randomCard.color = randomIntFromInterval(1, 2);
    console.log(randomCard.number + " " + randomCard.shape + " " + randomCard.color);
    return randomCard;
}

function randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
