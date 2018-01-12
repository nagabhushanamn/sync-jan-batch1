import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  isOpen: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.isOpen = !this.isOpen
  }

}
