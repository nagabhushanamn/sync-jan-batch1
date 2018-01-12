import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HitButton } from './hitbutton.component';
import { TotalCountDisplay } from './totalcountdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    HitButton,
    TotalCountDisplay
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
