import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  totalCount: number = 0;

  incCount(event: any): void {
    console.log(event);
    this.totalCount += Number.parseInt(event.value)
  }

}
