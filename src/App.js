import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <h1 style={{ color: "black" }}>Color Switcher</h1>
        <div id="color-panel" className="black"></div>
        <div className="button-container">
          <button className="red"></button>
          <button className="yellow"></button>
          <button className="blue"></button>
          <button className="green"></button>
        </div>
        <input type="color"/>
      </div>
    );
  }
}

export default App;
