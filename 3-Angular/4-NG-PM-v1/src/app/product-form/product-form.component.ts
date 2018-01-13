import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  product: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      //id:[''],
      name: [''],
      price: [''],
      description: ['']
    });
    this.route.data.subscribe(data => {
      this.product = data.product;
      this.productForm.patchValue(this.product)
    })

  }

  addNewProduct() {
    if (this.route.snapshot.data.action === 'update') {
      let product = Object.assign({}, this.product, this.productForm.value);
      this.productService.updateProduct(product)
        .subscribe(product => {
          this.router.navigate(['all', { id: product.id }])
        });
    } else {
      this.productService.addNewProduct(this.productForm.value)
        .subscribe(product => {
          this.router.navigate(['all', { id: product.id }])
        });
    }
  }

}
