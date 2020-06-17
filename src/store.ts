import { createStore, combineReducers } from 'redux';
import CounterReducer from './counter/CounterReducer';

const appReducers = combineReducers({
  counter: CounterReducer
});

const myStore = createStore(appReducers);

//Typescript specific
export type AppState = ReturnType<typeof appReducers>;

export default myStore;