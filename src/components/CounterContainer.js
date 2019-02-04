import React, { Component } from "react";
import Counter from "./Counter";
import { connect } from 'react-redux';
import { incCounter, decCounter, resetCounter } from './action';

class CounterContainer extends Component {

  render() {

    return (
      <Counter
        count={this.props.count}
        incCount={this.incrementCount}
        decCount={this.decrementCount}
        reset={this.resetCount}
      />
    );
  }

  incrementCount = () => {

    const newCount = this.props.count + 1;
    console.log('+ button clicked', newCount);
    this.props.incCounter(newCount);
  };
  decrementCount = () => {
    const newCount = this.props.count - 1;
    console.log('- button clicked', newCount);
    this.props.decCounter(newCount);
  };
  resetCount = () => {
    const newCount = 0;
    console.log('reset button clicked', newCount);
    this.props.resetCounter(newCount);
  };
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  incCounter, decCounter, resetCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
