export interface Card {
    number: CardNumbers | number;
    shape: Shapes | string;
    color?: Color | number | string;
}

export class Card implements Card {
    constructor() {
        this.number = CardNumbers.Ace;
        this.shape = Shapes.Spades;
        this.color = Color.Red;
    }
}


export enum CardNumbers {
     "Ace" = 1,
     "Jack" = 11,
     "Queen" = 12,
     "King" = 13
}

export enum Shapes {
    "Clubs" = 1,
    "Hearts",
    "Diamonds",
    "Spades"
}

export enum Color {
    "Red" = 1,
    "Black" = 2
}
