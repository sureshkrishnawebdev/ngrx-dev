import { createAction } from '@ngrx/store';

export const incrementCounter = createAction('increment');
export const decrementCounter = createAction('decrement');
export const resetCounter = createAction('reset');


/* NOte
    1. string inside actions needs to be unique(increment)
*/
