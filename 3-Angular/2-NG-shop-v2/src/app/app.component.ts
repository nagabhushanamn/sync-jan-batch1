import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title: string = "shopIT-v2";
  cart: Array<any> = [];
  viewCart: boolean = false
  products: Array<any> = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.loadProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }

  addToCart(event) {
    this.cart.push(event.product);
  }
  toggleCart(event) {
    event.preventDefault();
    this.viewCart = !this.viewCart;
  }

}
