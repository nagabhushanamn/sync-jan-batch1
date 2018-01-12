import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "shopIT-v2";
  cart: Array<any> = [];
  viewCart: boolean = false
  products: Array<any> = [
    {
      name: 'Laptop',
      price: 198000,
      description: 'New Mac pro',
      canBuy: true,
      image: 'images/Laptop.png',
      makeDate: Date.now(),
      discount: 10000
    },
    {
      name: 'Mobile',
      price: 18000,
      description: 'New  pro',
      canBuy: true,
      image: 'images/Mobile.png',
      makeDate: Date.now()
    }
  ]

  addToCart(event) {
    this.cart.push(event.product);
  }
  toggleCart(event) {
    event.preventDefault();
    this.viewCart = !this.viewCart;
  }

}
