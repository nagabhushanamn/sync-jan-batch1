import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  loadProducts() {
    console.log('loading products');
    let api = "http://localhost:8080/api/products";
    return this._http.get(api)
      .map(resp => resp.json())
  }

}
