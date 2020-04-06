import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        onClick={this.props.onClick}
        value={this.props.text}
      >
        {this.props.text || "All locations"}
      </button>
    );
  }
}

export default Button;
