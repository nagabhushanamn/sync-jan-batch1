import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {

  products: any = []
  newItemId: string = ''
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.products;
    })
    this.newItemId = this.route.snapshot.params['id'];
  }

  deleteProduct(e, prodId) {
    e.preventDefault();
    this.productService.deleteProduct(prodId)
      .subscribe(r => {
        this.products = this.products.filter(p => p.id !== prodId)
      })
  }

}
