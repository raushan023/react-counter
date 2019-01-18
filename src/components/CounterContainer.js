import React, { Component } from "react";
import Counter from "./Counter";
class CounterContainer extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <Counter
        count={this.state.count}
        incCount={this.incrementCount}
        decCount={this.decrementCount}
        reset={this.resetCount}
      />
    );
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };
}

export default CounterContainer;
