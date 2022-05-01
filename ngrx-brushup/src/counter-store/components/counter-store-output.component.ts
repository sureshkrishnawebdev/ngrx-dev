import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getCounter } from '../service/counter.selectors';

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
export class CounterStoreOutputComponent implements OnInit, OnDestroy{

    // PROPERTIES  
    counterSubscription!: Subscription;
    counter: number = 0;

   constructor(
       private store: Store<{counterStoreInstance: { counter: number }}>
   ){}


   ngOnInit(): void {
        this.counterSubscription = this.store.select( getCounter ).subscribe( counter => {
            console.log('counterSubscription called');
            this.counter = counter;
        })
   }

   ngOnDestroy(): void {
    this.counterSubscription && this.counterSubscription.unsubscribe();
   }

}