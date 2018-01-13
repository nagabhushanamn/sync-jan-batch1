import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  buy = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleBuy() {
    this.buy.emit({ product: this.product });
  }

  changeTab(tabIdx: number, event: any): void {
    event.preventDefault();
    this.tab = tabIdx
  }
  isTabSelected(tabIdx: number): boolean {
    return this.tab === tabIdx;
  }

}
