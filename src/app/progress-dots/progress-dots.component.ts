import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress-dots',
  templateUrl: './progress-dots.component.html',
  styleUrls: ['./progress-dots.component.css']
})

export class ProgressDotsComponent {
  @Input() index;
  @Input() length;

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
