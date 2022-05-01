import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCounterState = createFeatureSelector<{ counter: number, title: string }>('counterStoreInstance');

export const getCounter = createSelector( getCounterState, (state) =>{
    return state.counter;
});

export const getCounterTitle = createSelector( getCounterState, (state) =>{
    return state.title;
});