import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-total-count-display',
    template: `
        <div class=" alert alert-danger">
            <p>Total Count : <span class="badge">{{count}}</span></p>
        </div>
    `
})
export class TotalCountDisplay {

    @Input()
    count: number;

    constructor() {
        console.log('TotalCountDisplay :: constructor');
    }
}