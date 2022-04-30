import { Component, Input } from '@angular/core';

@Component({
    selector: 'counter-store-output',
    template:`

     <h2>  Counter is:  {{ counter }} </h2>

    `,
    styles:[
        `
        :host{
            font-size: 14px;
        }

        `
    ]
})
export class CounterStoreOutputComponent {

    @Input() 
    counter: number = 0;

}