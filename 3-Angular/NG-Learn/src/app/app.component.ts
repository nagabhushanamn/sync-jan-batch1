import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  totalCount: number = 0;

  incCount(): void {
    this.totalCount++
  }
  
}
