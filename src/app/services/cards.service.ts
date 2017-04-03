import { Card, CardNumbers, Shapes } from '../objects/cards';
import { Injectable } from '@angular/core';


@Injectable()

export class CardsService {

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
        return randomCards;
    }
}

function generateRandomCard(): Card {
    let randomCard: Card = { number: 1, shape: 2};
    randomCard.number = randomIntFromInterval(1, 13);
    randomCard.shape = randomIntFromInterval(1, 4);
    // console.log(randomCard.number + " " + randomCard.shape);
    return randomCard;
}

function randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
