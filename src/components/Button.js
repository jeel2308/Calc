import React, { Component } from "react";
import "../../src/styles/button.css";

class Button extends Component {
  handleClick = e => {
    this.props.onClick(this.props.name);
  };
  handleDisableBtn = (name, display) => {
    if (isNaN(display)) {
      if (name !== "AC") return true;
      else return false;
    } else {
      if (name === "CE" || name[0] === "U")
        if (display === null) {
          return true;
        } else return false;
      else return false;
    }
  };
  handleClass = (name, keyPressed) => {
    //console.log(keyPressed);
    if (keyPressed === name) {
      if (isNaN(name) && name !== ".") return "button ops active_op";
      else return "button active";
    }
    if (isNaN(name) && name !== ".") return "button ops";
    else return "button";
  };
  handleFocus = () => {};
  handleBlur = e => {
    e.target.blur();
    document.getElementsByClassName("ops")[0].focus();
  };

  //  handleButton = (evt,num) => {
  //    if(!num){
  //      if(evt.target.className.search("ops")!==-1)
  //       evt.target.className = evt.target.className + " hover_og";
  //      else
  //       evt.target.className = evt.target.className + " hover_wh";
  //    }
  //     else
  //       evt.target.className = evt.target.className.substr(0,evt.target.className.length-9);
  //  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className={this.handleClass(this.props.name, this.props.keyPressed)}
          disabled={this.handleDisableBtn(this.props.name, this.props.display)}
          onFocus={
            this.props.name === "AC" ? this.handleFocus : this.handleBlur
          }

          //  onMouseEnter={(evt)=>this.handleButton(evt,0)}
          //  onMouseLeave={(evt)=>this.handleButton(evt,1)}
          //onKeyPress={this.handleKey}
        >
          {this.props.name[0] === "U"
            ? this.props.name.substr(1, this.props.name.length - 1)
            : this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
