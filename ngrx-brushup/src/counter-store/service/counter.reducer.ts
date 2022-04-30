import { Action, createReducer, on } from '@ngrx/store';

import { initialState } from './counter.state';

import { decrementCounter, incrementCounter, resetCounter } from './counter.actions';

const _counterReducer = createReducer( initialState, 
    
    on(incrementCounter , (state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }),
    on( decrementCounter, (state) => {
        return{
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(resetCounter, (state) => {
        return {
            ...state,
            counter: 0
        };
    })

    )


export function counterReducer( state: any, action: any ){
    return _counterReducer( state, action );
}