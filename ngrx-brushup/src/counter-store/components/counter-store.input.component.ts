import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCounter, changeCounterTitle } from '../service/counter.actions';

@Component({
    selector: 'counter-store-input',
    template:`

    <input type="text" [(ngModel)]="addToCounter" />
    <button type="button" class="btn-info" (click)="onAdd()"> Add to Counter </button>

    <input type="text" [(ngModel)]="counterTitle" />
    <button type="button" class="btn-info" (click)="onCounterTitleChange()"> Modify Title </button>

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
    counterTitle: string = '';

    constructor(
        private store: Store<{counterStoreInstance: {counter: number}}>
    ){}

    onAdd(): void {
        this.store.dispatch( addToCounter( { valueToAdd: +this.addToCounter } ) );
    }

    onCounterTitleChange():void{
        this.store.dispatch( changeCounterTitle( { title: this.counterTitle } ) )
    }
}