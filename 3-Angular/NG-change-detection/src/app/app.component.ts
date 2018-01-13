import { Component, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'app';
  progress: number = 0;
  product: any = {
    name: 'Laptop',
    price: 18000
  }
  constructor(private zone: NgZone, private cd: ChangeDetectorRef) { }

  changePrice() {
    console.log('changing price...');
    this.product = Object.assign({}, this.product, { price: 20000 })
  }

  ngOnInit() {
    //this.cd.detach();
    //setInterval(() => { this.cd.reattach() }, 2000);
  }

  processWithinAngularZone() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done!'));
  }

  processOutsideAngularZone() {
    this.progress = 0;
    this.zone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.zone.run(() => {
          console.log('Outside Done!');
        });
      });
    });
  }
  increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);
    if (this.progress < 100) {
      if (this.progress % 10 === 0)
        this.zone.run(() => {
          console.log('+10%');
        });
      window.setTimeout(() => {
        this.increaseProgress(doneCallback);
      }, 100);
    } else {
      doneCallback();
    }
  }
}
