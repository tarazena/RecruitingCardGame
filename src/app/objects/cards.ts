export interface Card {
    number: CardNumbers | number;
    shape: Shapes;
    color: Color | number;
}

export class Card implements Card {
    constructor() {
        this.number = CardNumbers.Ace;
        this.shape = Shapes.Spades;
        this.color = Color.Red;
    }
}


export enum CardNumbers {
     Ace = 1,
     Jack = 11,
     Queen = 12,
     King = 13
}

export enum Shapes {
    Spades,
    Diamonds,
    Clubs,
    Hearts
}

export enum Color {
    Red,
    Black
}
