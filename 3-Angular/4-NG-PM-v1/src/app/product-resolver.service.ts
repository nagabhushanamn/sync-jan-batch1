import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { ProductService } from './product.service';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ProductResolverService implements Resolve<any>{

  constructor(private http: Http) { }

  resolve(route: ActivatedRouteSnapshot): any {
    let id = route.params['id']
    return this.http.get('http://localhost:8080/api/products/' + id).map(resp => resp.json());
  }

}
