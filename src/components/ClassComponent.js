import React, { Component } from "react";
import HomepageCard from "../components/HomepageCard";

class ClassComponent extends Component {
  render() {
    return (
      <div className="classcomp">
        <HomepageCard
          title="Mobiles"
          link={require("../img/adv_1.png")}
        ></HomepageCard>
        <HomepageCard
          title="Smart Watches"
          link={require("../img/adv_1.png")}
        ></HomepageCard>
        <HomepageCard
          title="Cameras"
          link={require("../img/adv_1.png")}
        ></HomepageCard>
        <HomepageCard
          title="Gaming Accesories"
          link={require("../img/adv_1.png")}
        ></HomepageCard>
        <HomepageCard
          title="Earphones and Speakers"
          link={require("../img/adv_1.png")}
        ></HomepageCard>
      </div>
    );
  }
}

export default ClassComponent;
