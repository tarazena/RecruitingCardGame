import { Injectable } from '@angular/core';
import { } from "../console-log/console-log.component";

@Injectable()

export class LogService {
    // log: string[];
    log: [{
        answer: string,
        question: string
    }];
    
    question: string;
    constructor() {
        this.log = [{
            answer: '',
            question: ''
        }];

        this.question = '';
    }

    getLogs(): [{}] {
        return this.log;
    }
    
    addQuestion(q: string) {
        this.question = q;
    }

    addAnswer(a: string) {
        this.log.unshift({
            answer: a,
            question: this.question
        })
        // this.log.unshift(a);
        // this.log.unshift(this.question);
    }
}

