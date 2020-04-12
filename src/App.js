import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import FirstComponent from "./components/FirstComponent";
import { FunctionalComponent } from "./components/FirstComponent";
import ClassComponent from "./components/ClassComponent";
import { Heading } from "./components/SectionHeader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactApp</h1>
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
        <Heading title="Heading 2"></Heading>
        <ClassComponent id="second"></ClassComponent>
        <Heading title="Heading 3"></Heading>
      </main>
    </div>
  );
}

export default App;
