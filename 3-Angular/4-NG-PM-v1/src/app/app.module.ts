import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ProductService } from './product.service';
import { ProductResolverService } from './product-resolver.service';
import { ProductsResolverService } from './products-resolver.service';
import { ProductFormComponent } from './product-form/product-form.component';

let routes: Routes = [
  {
    path: 'all',
    component: ViewAllComponent,
    resolve: {
      products: ProductsResolverService
    }
  },
  { path: 'new', component: ProductFormComponent },
  {
    path: 'edit/:id',
    data: {
      action: 'update'
    },
    resolve: {
      product: ProductResolverService
    },
    component: ProductFormComponent,
  },
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAllComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    DataTableModule,
    HttpModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  providers: [
    ProductService,
    ProductResolverService,
    ProductsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
