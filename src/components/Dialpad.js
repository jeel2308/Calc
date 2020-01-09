import React from "react";
import { Component } from "react";
import Button from "./Button";
// import Operand from './Operand';
// import Operator from './Operator';
import "../../src/styles/dialpad.css";
class Dialpad extends Component {
  handleClick = ButtonName => {
    this.props.onClick(ButtonName);
  };

  render() {
    return (
      <>
        <div className="dialpad">
          <Button
            name="AC"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="CE"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="%"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="/"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />

          <Button
            name="1"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="2"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="3"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="*"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />

          <Button
            name="4"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="5"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="6"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="+"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />

          <Button
            name="7"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="8"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="9"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="-"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />

          <Button
            name="0"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="."
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="="
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
          <Button
            name="Usqrt"
            onClick={this.handleClick}
            display={this.props.display}
            keyPressed={this.props.keyPressed}
          />
        </div>
      </>
    );
  }
}

export default Dialpad;
