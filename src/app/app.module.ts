import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { ConsoleLogComponent } from './console-log/console-log.component';
import { RulesComponent } from './rules/rules.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ConsoleLogComponent,
    RulesComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
