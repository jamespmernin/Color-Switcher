import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      textColor: "black"
    };
  }

  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  changeTextColor(e) {
    this.setState({ textColor: e.target.value });
  }

  render() {
    return (
      <div className="app">
        <h1 style={{ color: this.state.textColor }}>Color Switcher</h1>
        <div id="color-panel" className={this.state.color}></div>
        <div className="button-container">
          <button className="red" onClick={() => this.changeColor("red")}></button>
          < button className="yellow" onClick={() => this.changeColor("yellow")}></button>
          <button className="blue" onClick={() => this.changeColor("blue")}></button>
          <button className="green" onClick={() => this.changeColor("green")}></button>
        </div>
        <input type="color" onChange={(e) => this.changeTextColor(e)} />
      </div>
    );
  }
}

export default App;
