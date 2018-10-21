import React, { Component } from "react";

class ButtonOptions extends Component {
  handleClick = () => this.props.onClick(this.props.index);
  state = {
    classname: this.props.classname
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        type="button"
        className={
          this.state.classname + (this.props.isActive ? "active" : "album")
        }
      >
        <span>{this.props.name}</span>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonOptions;
