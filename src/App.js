import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import FirstComponent from "./components/FirstComponent"; /*(default export)*/
// import { FunctionalComponent } from "./components/FirstComponent"; /*(named export)*/
import ClassComponent from "./components/ClassComponent";
import { Heading } from "./components/SectionHeader";
import LikeStateComp from "./components/LikeStateComp";
// import CounterStateComp from "./components/CounterStateComp";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>MyReactApp</h1>
        </div>
        <a href="/" className="App-link">
          Home
        </a>
        <a href="/" className="App-link">
          Products
        </a>
        <a href="/" className="App-link">
          Contact Us
        </a>
      </header>
      <main>
        <Heading title="Homepage"></Heading>
        <Heading title="Heading 2 Using props"></Heading>
        <ClassComponent id="second"></ClassComponent>
        <Heading title="Footer section"></Heading>
      </main>
      <footer className="App-footer">
        {/* <CounterStateComp></CounterStateComp> */}
        <Timer></Timer>
        <LikeStateComp></LikeStateComp>
      </footer>
    </div>
  );
}

export default App;
