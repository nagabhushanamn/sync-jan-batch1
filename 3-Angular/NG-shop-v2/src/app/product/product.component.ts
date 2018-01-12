import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: any;
  @Input()
  idx: number;

  tab: number = 1


  constructor() { }

  ngOnInit() {
  }

  changeTab(tabIdx: number, event: any): void {
    event.preventDefault();
    this.tab = tabIdx
  }
  isTabSelected(tabIdx: number): boolean {
    return this.tab === tabIdx;
  }

}
