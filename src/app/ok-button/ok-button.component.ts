import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-ok-button',
  templateUrl: './ok-button.component.html',
  styleUrls: ['./ok-button.component.css']
})

export class OkButtonComponent {
  @Output() okStateToParent = new EventEmitter();
  @Input() okState;

  onOkClick(okState) {
    this.okStateToParent.emit(okState + 1);
  }
}
