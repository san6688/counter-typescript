export interface CounterState {
  counterVal: number,
}

export enum CounterActionTypes {
  INCEREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

export interface INCREMENTACTION {
  type: CounterActionTypes.INCEREMENT,  
}

export interface DECREMENTACTION {
  type: CounterActionTypes.DECREMENT,
}

export type CounterActions = INCREMENTACTION | DECREMENTACTION;