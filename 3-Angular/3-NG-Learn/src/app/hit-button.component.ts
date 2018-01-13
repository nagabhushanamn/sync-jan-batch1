import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-hit-button',
    template: `
        <div class="my-inline well">
            <button (click)="handleBtnClick()" class="btn btn-primary">{{label}}  : <span class="badge">{{count}}</span></button>
        </div>
    `,
    styles: [
        `
        .my-inline{
            display:inline;
            margin:10px;
        }
      `
    ]
})
export class HitButton {

    @Input()
    label: any

    count: number = 0;

    @Output()
    hit = new EventEmitter();

    constructor() {
        console.log('HitButton :: constructor');
    }

    handleBtnClick() {
        this.count++;
        this.hit.emit({ value: this.label });
    }



}