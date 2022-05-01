import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../service/counter.selectors';

import { Observable } from 'rxjs';

@Component({
    selector: 'counter-store-output',
    template:`

     <h2>  Counter is:  {{ counter$ | async }} </h2>

    `,
    styles:[
        `
        :host{
            font-size: 14px;
        }

        `
    ]
})
export class CounterStoreOutputComponent implements OnInit{

    // PROPERTIES  
    counter$!: Observable<number>;

   constructor(
       private store: Store<{counterStoreInstance: { counter: number }}>
   ){}


   ngOnInit(): void {
       this.counter$ = this.store.select( getCounter );
   }


}