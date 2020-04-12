import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div className="classcomp">
        <h2>Class Component {this.props.id}</h2>
      </div>
    );
  }
}

export default ClassComponent;
