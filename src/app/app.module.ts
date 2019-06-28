import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { ProgressDotsComponent } from './progress-dots/progress-dots.component';
import { OkButtonComponent } from './ok-button/ok-button.component';

@NgModule({
    declarations: [
        AppComponent,
        AnswerComponent,
        QuestionComponent,
        ProgressDotsComponent,
        OkButtonComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
