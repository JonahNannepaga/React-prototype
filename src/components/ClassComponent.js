import React, { Component } from "react";
import HomepageCard from "../components/HomepageCard";

class ClassComponent extends Component {
  render() {
    return (
      <div className="classcomp">
        <HomepageCard
          title="Mobiles"
          link={require("../img/new_single.png")}
        ></HomepageCard>
        <HomepageCard
          title="Speakers"
          link={require("../img/adv_3.png")}
        ></HomepageCard>
        <HomepageCard
          title="Laptops and Monitors"
          link={require("../img/blog_5.jpg")}
        ></HomepageCard>
        <HomepageCard
          title="Smart Watches"
          link={require("../img/trends_2.jpg")}
        ></HomepageCard>
        <HomepageCard
          title="Earphones"
          link={require("../img/adv_1.png")}
        ></HomepageCard>
      </div>
    );
  }
}

export default ClassComponent;
