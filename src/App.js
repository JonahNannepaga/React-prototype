import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import FirstComponent from "./components/FirstComponent"; /*(default export)*/
import { FunctionalComponent } from "./components/FirstComponent"; /*(named export)*/
import ClassComponent from "./components/ClassComponent";
import { Heading } from "./components/SectionHeader";
import LikeStateComp from "./components/LikeStateComp";
import CounterStateComp from "./components/CounterStateComp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>MyReactApp</h1>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <FunctionalComponent></FunctionalComponent>
        <ClassComponent id="first"></ClassComponent>
        <Heading title="Heading 1 Using props"></Heading>
        <Heading title="Heading 2 Using props"></Heading>
        <ClassComponent id="second"></ClassComponent>
        <Heading title="Footer section"></Heading>
      </main>
      <footer className="App-footer">
        <CounterStateComp></CounterStateComp>
        <LikeStateComp></LikeStateComp>
      </footer>
    </div>
  );
}

export default App;
