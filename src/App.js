import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
