import { Component } from '@angular/core';

@Component({
    selector:'counter-normal',
    template:`

    Counter Normal Component 

    <counter-normal-output></counter-normal-output>

    <counter-normal-buttons></counter-normal-buttons>

    `,
    styles:[
        `
            :host {
                background-color: tomato;
            }
        `
    ]
})
export class CounterNormalComponent { }