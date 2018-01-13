import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  apiURL: string = "http://localhost:8080/api/products";
  constructor(private _http: Http) { }

  loadAllProducts() {
    return this._http.get(this.apiURL).map(resp => resp.json())
  }

  addNewProduct(product) {
    product.image = 'images/no-pic.png';
    return this._http.post(this.apiURL, product).map(resp => resp.json());
  }
  updateProduct(product) {
    product.image = 'images/no-pic.png';
    return this._http.put(this.apiURL + "/" + product.id, product).map(resp => resp.json());
  }
  deleteProduct(id) {
    return this._http.delete(this.apiURL + "/" + id).map(resp => resp.json())
  }

}
