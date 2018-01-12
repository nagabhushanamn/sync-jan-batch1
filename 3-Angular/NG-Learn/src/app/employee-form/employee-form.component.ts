import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeModel: any = {
    firstName: '',
    lastName: ''
  };

  constructor() { }

  ngOnInit() {
  }

  loadEmployee() {
    // 
    let model = {
      firstName: 'Nag',
      lastName: 'N'
    };
    this.employeeModel = model;

  }

  handleSubmit(event, employeeForm) {
    event.preventDefault();
    console.dir(employeeForm.value);
  }

}
