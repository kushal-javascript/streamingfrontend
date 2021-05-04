import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Playvideo from "./Components/Playvideo";

import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="components">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/playvideo/:id" component={Playvideo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default connect()(App);
