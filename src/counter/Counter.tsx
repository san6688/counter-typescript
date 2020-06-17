import React from 'react';
import { AppState } from '../store';
import  { connect }  from 'react-redux';
import  { bindActionCreators, Dispatch, AnyAction } from 'redux';
import { incrementCounter, decrementCounter } from './CounterAction';

class Counter extends React.PureComponent<CounterProps, {}>{

  render(){
    return (
      <div>
        <h4 className="title is-size-4">{this.props.title}</h4>
        <h6 className="title is-size-6">{this.props.subtitle}</h6>
        <h5 className="title is-size-5">{this.props.counterVal}</h5>
        <button className="button is-info" onClick={this.props.incrementCounter}>Increment</button>
        <button className="button is-danger" onClick={this.props.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: any) => {
  return {
    counterVal: state.counter.counterVal,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({
    incrementCounter,
    decrementCounter
  },dispatch)
}

type CounterProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(Counter);