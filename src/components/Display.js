import React from "react";
//import {Component} from 'react';
import "../../src/styles/display.css";
function Display(props) {
  return (
    <div className="display">
      <div className="history">
        {props.data.op2 && props.data.operation
          ? props.data.op2 + props.data.operation
          : ""}
      </div>
      <div className="answer">{props.data.op1}</div>
    </div>
  );
}
export default Display;
