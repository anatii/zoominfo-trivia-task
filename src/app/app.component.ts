import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data;
  okState = 0;
  chosenAnswer = '';
  index = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
      this.dataService.getRemoteData().pipe(map(responseData => {
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key) && key === 'results') {
          return responseData[key].map(({ category, type, difficulty, ...rest}) => rest );
        }
      }
    })).subscribe(data => {
      this.data = data.map(dataItem => {
        dataItem.answers = [];
        dataItem.incorrect_answers.forEach(property => dataItem.answers.push({text: property, isCorrect: false}));
        dataItem.answers.push({text: dataItem.correct_answer, isCorrect: true});
        delete dataItem.incorrect_answers;
        delete dataItem.correct_answer;
        for (let i = dataItem.answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [dataItem.answers[i], dataItem.answers[j]] = [dataItem.answers[j], dataItem.answers[i]];
        }
        return dataItem;
      });
    });
  }

  getChosenAnswer(chosenAnswer) {
    if (chosenAnswer) {
      this.chosenAnswer = chosenAnswer;
      if (this.okState % 3 === 0) {
        this.okState = this.okState + 1;
      }
    }
  }

  getOkState(okState) {
    if (okState) {
      this.okState = okState;
      if (this.okState % 3 === 0) {
        this.index = this.index + 1;
        this.chosenAnswer = '';
      }
      if (this.index === this.data.length) {
        this.index = 0;
      }
    }
  }
}
