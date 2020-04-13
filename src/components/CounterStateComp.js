import React, { Component } from "react";

class CounterStateComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="like-state">
        <p>Count {this.state.count}</p>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

export default CounterStateComp;
