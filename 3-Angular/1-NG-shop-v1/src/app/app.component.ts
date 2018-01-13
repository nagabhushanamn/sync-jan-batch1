import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "shopIT-v1"
  tab: number = 1
  products: Array<any> = [
    {
      name: 'Laptop',
      price: 198000,
      description: 'New Mac pro',
      canBuy: true,
      image: 'images/Laptop.png'
    },
    {
      name: 'Mobile',
      price: 18000,
      description: 'New  pro',
      canBuy: true,
      image: 'images/Mobile.png'
    }
  ]

  changeTab(tabIdx: number, event: any): void {
    event.preventDefault();
    this.tab = tabIdx
  }
  isTabSelected(tabIdx: number): boolean {
    return this.tab === tabIdx;
  }

}
