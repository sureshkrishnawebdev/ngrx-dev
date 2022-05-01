import { createReducer, on } from '@ngrx/store';

import { initialState } from './counter.state';

import { addToCounter, changeCounterTitle, decrementCounter, incrementCounter, resetCounter } from './counter.actions';

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
    }),
    on( addToCounter, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.valueToAdd,
        };
    }),
    on(changeCounterTitle, (state, action) => {
        return {
            ...state,
            title: action.title,
        };
    })

    )


export function counterReducer( state: any, action: any ){
    return _counterReducer( state, action );
}