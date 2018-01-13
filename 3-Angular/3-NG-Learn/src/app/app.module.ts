import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HitButton } from './hit-button.component';
import { TotalCountDisplay } from './total-count-display.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HitButton,
    TotalCountDisplay,
    EmployeeFormComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
