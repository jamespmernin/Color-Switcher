import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black"
    };
  }

  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className="app">
        <h1 style={{ color: "black" }}>Color Switcher</h1>
        <div id="color-panel" className={this.state.color}></div>
        <div className="button-container">
          <button className="red" onClick={() => this.changeColor("red")}></button>
          < button className="yellow" onClick={() => this.changeColor("yellow")}></button>
          <button className="blue" onClick={() => this.changeColor("blue")}></button>
          <button className="green" onClick={() => this.changeColor("green")}></button>
        </div>
        <input type="color" />
      </div>
    );
  }
}

export default App;
