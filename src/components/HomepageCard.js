import React from "react";
/*Using ES6 syntax Arrow function  (Named Exports)*/

export const HomepageCard = (props) => (
  <div className="carditem">
    <h3>{props.title}</h3>
    {/* <img src={require(`${props.link}`)} alt="card-item" /> */}
    <img src={props.link} alt="card-item" />
  </div>
);

export default HomepageCard;
