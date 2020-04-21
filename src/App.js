import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LikeStateComp from "./components/LikeStateComp";
import Timer from "./components/Timer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <a href="/React-prototype">
              <h1>MyReactApp</h1>
            </a>
          </div>

          <Link to="/React-prototype" className="App-link">
            Home
          </Link>
          <Link to="/React-prototype/products" className="App-link">
            Products
          </Link>
          <Link to="/React-prototype/contact" className="App-link">
            Contact Us
          </Link>
        </header>
        <main>
          <Switch>
            {/* <Route path="/" exact component={Home}></Route> */}
            <Route path="/React-prototype" exact component={Home}></Route>
            <Route path="/React-prototype/contact" component={About}></Route>
            <Route
              path="/React-prototype/products"
              exact
              component={Products}
            ></Route>
            <Route
              path="/React-prototype/products/:id"
              component={ProductDetail}
            ></Route>
          </Switch>
        </main>
        <footer className="App-footer">
          <Timer></Timer>
          <LikeStateComp></LikeStateComp>
        </footer>
        <Copyright></Copyright>
      </div>
    </Router>
  );
}

export default App;
