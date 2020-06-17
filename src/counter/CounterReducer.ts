import { CounterState, CounterActions, CounterActionTypes } from './types';

const initalState: CounterState = {
  counterVal: 10
}

const CounterReducer = (state: CounterState = initalState, action: CounterActions): CounterState => {
  switch(action.type){
    case CounterActionTypes.INCEREMENT:
      return {
        counterVal: state.counterVal + 1
      }
    case CounterActionTypes.DECREMENT:
      return {
        counterVal: state.counterVal - 1
      }
    default: 
      return state;
  }
}

export default CounterReducer;