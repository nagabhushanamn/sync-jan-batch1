import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HitButton } from './hit-button.component';
import { TotalCountDisplay } from './total-count-display.component';


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
