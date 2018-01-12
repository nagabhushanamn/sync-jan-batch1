import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-total-count-display',
    template: `
        <div class="newline alert alert-danger">
            <p>Total Count : <span class="badge">{{count}}</span></p>
        </div>
    `,
    styles: [
        `
        .newline{
            clear:both
        }
        `
    ]
})
export class TotalCountDisplay {

    @Input()
    count: number;

    constructor() {
        console.log('TotalCountDisplay :: constructor');
    }
}