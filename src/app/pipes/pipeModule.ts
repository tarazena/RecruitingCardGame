import { NgModule } from '@angular/core';
import { SecondQuestionPipe, ThirdQuestionPipe } from './questionsPipes';

@NgModule({
    imports: [],
    declarations: [SecondQuestionPipe, ThirdQuestionPipe],
    exports: [SecondQuestionPipe, ThirdQuestionPipe]
})

export class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: []
        }
    }
}