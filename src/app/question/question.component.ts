import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  index = 0;
  question = 'What year did the television company BBC officially launch the channel BBC One?';

  constructor() { }

  ngOnInit() {
  }

}
