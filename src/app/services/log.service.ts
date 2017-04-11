import { Injectable } from '@angular/core';
import { } from "../console-log/console-log.component";

@Injectable()

export class LogService {
    log: string[];

    constructor() {
        this.log = [];
    }

    getLogs(): string[] {
        return this.log;
    }
    
    addQuestion(q: string) {
        this.log.push(q)
    }

    addAnswer(a: string) {
        this.log.push(a);
    }
}

