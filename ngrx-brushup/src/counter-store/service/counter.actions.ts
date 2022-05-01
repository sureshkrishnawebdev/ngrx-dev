import { createAction, props } from '@ngrx/store';

export const incrementCounter = createAction('increment');
export const decrementCounter = createAction('decrement');
export const resetCounter = createAction('reset');

export const addToCounter = createAction('addToCounter', props<{ valueToAdd: number}>() );

export const changeCounterTitle = createAction('changeCounterTitle', props<{ title: string}>() );

/* NOte
    1. string inside actions needs to be unique(increment)
    2. Action name and create action name can 
        - same 
            - export const changeCounterTitle = createAction('changeCounterTitle')
        - different
            - export const resetCounter = createAction('reset');

        - it's the fun name we are going to use for dispatching action
            - i.e. resetCounter, changeCounterTitle
*/
