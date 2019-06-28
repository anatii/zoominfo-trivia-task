import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {
    let dataArray;
    this.dataService.getRemoteData().pipe(map(responseData => {
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key) && key === 'results') {
          dataArray = responseData[key].map(({ category, type, difficulty, ...rest}) => rest );
        }
      }
      return dataArray;
    })).subscribe(data => {
      console.log(data);
    });
  }
}
