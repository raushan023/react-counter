import React, { Component } from "react";
import Counter from "./Counter";
import { connect } from 'react-redux';
import { incCounter } from './action';

class CounterContainer extends Component {

  render() {

    return (
      <Counter
        count={this.props.count}
        incCount={this.incrementCount}
      // decCount={this.decrementCount}
      // reset={this.resetCount}
      />
    );
  }

  incrementCount = () => {

    const newCount = this.props.count + 1;
    console.log('button clicked', newCount);
    this.props.incCounter(newCount);
  };
  // decrementCount = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };
  // resetCount = () => {
  //   this.setState({ count: 0 });
  // };
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  incCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
