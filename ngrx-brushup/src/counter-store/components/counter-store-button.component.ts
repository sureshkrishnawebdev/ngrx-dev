import { Component} from '@angular/core';

import { Store } from '@ngrx/store';

import { decrementCounter, incrementCounter, resetCounter } from '../service/counter.actions';

@Component({
    selector: 'counter-store-button',
    template:`

    <button type="button" class="btn-primary" (click)="onIncrementCounter()"> + </button>
    <button type="button" class="btn-warning" (click)="onDecrementCounter()">  - </button>
    <button type="button" class="btn-info" (click)="onResetCounter()">  Reset </button>

    `,
    styles:[
        `
        button {
            height: 50px;
            width: 50px;
            text-align: center;
            border-radius: 5%;
            border: none;
            margin: 10px;
        }

        `
    ]
})
export class CounterStoreButtonComponent {

    constructor(
        private store: Store<{counterStoreInstance: {counter: number}}>
    ){}

    /*NOTE
        1. counterStoreInstance be same as used in module 
    */

    onIncrementCounter(): void{
       this.store.dispatch( incrementCounter() );
    }    

    onDecrementCounter(): void{
       this.store.dispatch( decrementCounter() );
    }    

    onResetCounter(): void{
       this.store.dispatch( resetCounter() );
    }

}