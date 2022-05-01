import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCounter } from '../service/counter.actions';

@Component({
    selector: 'counter-store-input',
    template:`

    <input type="text" [(ngModel)]="addToCounter" />
    <button type="button" class="btn-info" (click)="onAdd()"> Add to Counter </button>

    `,
    styles:[
        `
        :host{
            font-size: 14px;
        }

        `
    ]
})
export class CounterStoreInputComponent {

    // PROPERTIES
    addToCounter: number = 0;

    constructor(
        private store: Store<{counterStoreInstance: {counter: number}}>
    ){}

    onAdd(): void {
        this.store.dispatch( addToCounter( { valueToAdd: +this.addToCounter } ) );
    }
}