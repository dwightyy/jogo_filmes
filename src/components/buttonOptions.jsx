import React, { Component } from "react";

class ButtonOptions extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
    this.props.getOp(this.props.text);
  };
  state = {
    classname: this.props.classname
  };
  render() {
    return (
      <button
        value="text"
        onClick={this.handleClick}
        type="button"
        className={
          this.state.classname + (this.props.isActive ? "active" : "album")
        }
      >
        {this.props.text}
      </button>
    );
  }
}

export default ButtonOptions;
