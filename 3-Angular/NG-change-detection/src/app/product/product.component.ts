import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  offerPrice: number = 10000;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(() => {
      console.log('new offerprice down..');
      this.offerPrice -= 100
      this.cd.markForCheck();
    }, 3000);
  }



}
