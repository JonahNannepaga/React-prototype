import React, { Component } from "react";
import HomepageCard from "../components/HomepageCard";

class ClassComponent extends Component {
  render() {
    return (
      <div className="classcomp">
        <HomepageCard
          title="Mobiles"
          link="../../src/img/adv_1.png"
        ></HomepageCard>
        <HomepageCard
          title="Smart Watches"
          link="../../src/img/adv_1.png"
        ></HomepageCard>
        <HomepageCard
          title="Cameras"
          link="../../src/img/adv_1.png"
        ></HomepageCard>
        <HomepageCard
          title="Gaming Accesories"
          link="../../src/img/adv_1.png"
        ></HomepageCard>
        <HomepageCard
          title="Earphones and Speakers"
          link="../../src/img/adv_1.png"
        ></HomepageCard>
      </div>
    );
  }
}

export default ClassComponent;
