import React, { Component } from "react";
import Button from "./button";

class QuestionCounter extends Component {
  constructor(props) {
    super(props);
    this.updateCurrent = this.updateCurrent.bind(this);
  }
  state = {
    current: 1,
    teste: 2
  };

  updateCurrent() {
    console.log("entrou no update");
    this.setState({ current: this.state.current });
  }
  render() {
    return (
      <div className="text-center mx-auto">
        <h1>
          {this.props.current + 1} de {this.props.total * 2}
        </h1>
      </div>
    );
  }
}

export default QuestionCounter;
