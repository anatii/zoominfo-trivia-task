import { Component } from '@angular/core';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
    isAnswerClicked = true;
    isCorrectAnswer = true;
    isOkClicked = true;
    answer = 'yes';

    onAnswerClick() {

    }
}
