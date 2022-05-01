import { createAction, props } from '@ngrx/store';

export const incrementCounter = createAction('increment');
export const decrementCounter = createAction('decrement');
export const resetCounter = createAction('reset');

export const addToCounter = createAction('addToCounter', props<{ valueToAdd: number}>() );

/* NOte
    1. string inside actions needs to be unique(increment)
*/
