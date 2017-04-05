import { Injectable } from '@angular/core';
import { areOrQuestionMark, cards, cardsOrSumQuestions, howManyOrWhatQuestions, operations} from '../objects/mock-questions';
// import {} from '../objects/mock-questions';

@Injectable()

export class QuestionService {


    getAreOrQuestionMark(): Promise<any> {
        return Promise.resolve(areOrQuestionMark);
    }

    getCards(): Promise<any> {
        return Promise.resolve(cards);
    }

    getCardsOrSumQuestions(): Promise<any> {
        return Promise.resolve(cardsOrSumQuestions);
    }

    getHowManyOrWhatQuestions(): Promise<any> {
        return Promise.resolve(howManyOrWhatQuestions);
    }

    getOperations(): Promise<any> {
        return Promise.resolve(operations);
    }
}