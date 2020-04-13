import React, { Component } from "react";

class LikeStateComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "Did you like it?",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you !!",
    });
  }
  render() {
    return (
      <div className="like-state">
        <p>{this.state.message}</p>
        <button onClick={() => this.changeMessage()}>Yes</button>
      </div>
    );
  }
}

export default LikeStateComp;
