import React from "react";

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = { owner: 'Jonah',
    year: '2020' };
  }



  render() {
    return (
      <div className="copyright-section">
        <p>Created by {this.state.owner} &copy;{this.state.year} </p>
      </div>
    );
  }
}

export default Copyright;
