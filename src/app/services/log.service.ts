import { Injectable } from '@angular/core';
import { } from "../console-log/console-log.component";

@Injectable()

export class LogService {
    log: string[];
    question: string;
    constructor() {
        this.log = [];
        this.question = '';
    }

    getLogs(): string[] {
        return this.log;
    }
    
    addQuestion(q: string) {
        this.question = q;
    }

    addAnswer(a: string) {
        this.log.unshift(a);
        this.log.unshift(this.question);
    }
}

