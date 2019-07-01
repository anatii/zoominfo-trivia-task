import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.css']
})

export class AnswerComponent {
    @Input() answer;
    @Input() isCorrectAnswer;
    @Input() okState;
    @Input() chosenAnswer;
    @Output() answerClickToParent = new EventEmitter();

    onAnswerClick(answer) {
        this.answerClickToParent.emit(answer);
    }
}
