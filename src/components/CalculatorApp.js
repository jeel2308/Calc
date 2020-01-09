import React from "react";
import { Component } from "react";
import Display from "./Display";
import Dialpad from "./Dialpad";
import updateState from "../../src/logic/Calculate";
class CalculatorApp extends Component {
  state = {
    op1: "0",
    op2: null,
    operation: null,
    key: ""
  };

  validKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "/",
    "*",
    "-",
    "=",
    "CE",
    "AC",
    "Enter"
  ];
  handleClick = name => {
    if (this.state.key !== "Enter")
      this.setState(updateState(this.state, name));
  };
  handleKeyDown = event => {
    if (this.state.op1 === "Err" && event.key !== "Delete") return;
    if (this.state.op1 === null && event.key === "Backspace") return;
    let key = event.key;
    if (key === "Backspace") key = "CE";
    if (key === "Delete") key = "AC";
    let index = this.validKeys.indexOf(key);
    if (index !== -1) {
      this.setState(updateState(this.state, key));
      this.setState(() => ({ key }));

      // let updateTimer = function() {
      //
      //   this.timeOutActive.active = false;
      //   this.timeOutActive.id = "";
      // }.bind(this);

      // if (this.timeOutActive.active) {
      //   clearTimeout(this.timeOutActive.id);
      // }
      // let id = setTimeout(updateTimer, 100);
      // this.timeOutActive.active = true;
      // this.timeOutActive.id = id;
      // let key = event.key;
      //
    }
  };

  handleKeyUp = event => {
    this.setState(() => ({ key: "" }));
  };

  render() {
    return (
      <div
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        tabIndex={0}
      >
        <Display data={this.state} />
        <Dialpad
          onClick={this.handleClick}
          display={this.state.op1}
          keyPressed={this.state.key}
        />
      </div>
    );
  }
}
export default CalculatorApp;
