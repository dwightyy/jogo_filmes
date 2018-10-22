import React, { Component } from "react";
import ButtonOptions from "./buttonOptions";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        target: null,
        style: { backgroundColor: "red" }
      }
    };
  }

  handleClick = index => this.setState({ activeIndex: index });
  render() {
    return (
      <div className="btn-group-vertical mx-auto " role="group">
        <ButtonOptions
          classname="btn btn-op btn-lg "
          name="a"
          index={0}
          isActive={this.state.activeIndex === 0}
          onClick={this.handleClick}
          text="Primeiro"
        />
        <ButtonOptions
          classname="btn btn-op btn-lg "
          name="b"
          index={1}
          isActive={this.state.activeIndex === 1}
          onClick={this.handleClick}
          text="Segundo"
        />
        <ButtonOptions
          classname="btn btn-op btn-lg "
          name="c"
          index={2}
          isActive={this.state.activeIndex === 2}
          onClick={this.handleClick}
          text="Terceiro"
        />
      </div>
    );
  }
}

export default Options;
