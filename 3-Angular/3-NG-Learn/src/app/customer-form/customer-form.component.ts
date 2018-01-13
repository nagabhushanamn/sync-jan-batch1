import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

import { myRatingValidator, emailCompare } from '../my-validators';

import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  errorMessage: string = ''
  customerForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   email: new FormControl('')
    // })

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: { value: 'n/a', disabled: true },
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]],
      }, { validator: emailCompare }),
      phone: [''],
      notification: ['email'],
      rating: ['', [myRatingValidator(10, 20)]],
      sendCatalog: false,
    });

    this.customerForm.get('emailGroup.email')
      .valueChanges.subscribe((e) => {
        if (e === "nag@email.com") {
          this.errorMessage = "This Email Already Exist"
        }
      })

    this.customerForm.get('emailGroup.email')
      .statusChanges
      .debounceTime(2000)
      .subscribe((s) => {
        if (s === "INVALID") {
          this.errorMessage = "Invalid Email"
        } else {
          this.errorMessage = ""
        }
      });


  }

  setNotification(notiMode) {
    let phoneFormControl = this.customerForm.get('phone')
    if (notiMode === 'phone') {
      phoneFormControl.setValidators([
        Validators.required
      ]);
    } else {
      phoneFormControl.clearValidators()
    }
    phoneFormControl.updateValueAndValidity();
  }

  loadEmployee() {
    this.customerForm.patchValue({
      firstName: 'Nag',
      lastName: 'N',
      //email:'Nag@gmail.com'
    })
  }

}
