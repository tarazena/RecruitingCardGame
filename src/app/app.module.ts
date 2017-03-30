import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { HowManyComponent } from './features/questions/how-many/how-many.component';
import { QuestionsComponent } from './features/questions/questions.component';
import { ResultsComponent } from './features/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HowManyComponent,
    QuestionsComponent,
    ResultsComponent
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
