import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ViewCartComponent,
    PriceDiscountPipe,
    ReviewComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
