import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "shopIT-v1"
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

}
