import { Card, Color, CardNumbers, Shapes } from '../objects/cards';
import { Injectable } from '@angular/core';

@Injectable()

export class GeneratedCards {
    generatedCards: Card[];
    constructor() { 
        this.generatedCards = [];
    }

}
export function getGeneratedCards(): Card[] {
    console.log(this.generatedCards);
    return this.generatedCards;
}


export function setGeneratedCards(cards: Card[]) {
    this.generatedCards = cards;
}