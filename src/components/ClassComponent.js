import React, { Component } from "react";
import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
class ClassComponent extends Component {
  render() {
    return (
      <div className="classcomp home-page">
        <Link to={"/React-prototype/products"}>
          <h2>Welcome!!</h2>
          <h3>To explore Products click here!!</h3>
        </Link>

        {/* <HomepageCard
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
        ></HomepageCard>*/}
      </div>
    );
  }
}

export default ClassComponent;
