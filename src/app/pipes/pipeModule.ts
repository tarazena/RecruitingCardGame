import { NgModule } from '@angular/core';
import { SecondQuestionPipe } from './questionsPipes';

@NgModule({
    imports: [],
    declarations: [SecondQuestionPipe],
    exports: [SecondQuestionPipe]
})

export class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: []
        }
    }
}