import { INCREMENTACTION, DECREMENTACTION, CounterActionTypes } from './types';

export const incrementCounter = (): INCREMENTACTION => {
  return {
    type : CounterActionTypes.INCEREMENT,
  }
}

export const decrementCounter = (): DECREMENTACTION => {
  return {
    type : CounterActionTypes.DECREMENT,
  }
}