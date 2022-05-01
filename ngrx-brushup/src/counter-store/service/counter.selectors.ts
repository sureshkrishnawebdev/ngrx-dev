import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const getCounterState = createFeatureSelector<CounterState>('counterStoreInstance');

export const getCounter = createSelector( getCounterState, (state) =>{
    return state.counter;
});

export const getCounterTitle = createSelector( getCounterState, (state) =>{
    return state.title;
});