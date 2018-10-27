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

  updateCurrent(oldCurrent) {
    this.setState({ current: oldCurrent + 1 });
  }
  render() {
    return (
      <div className="text-center mx-auto">
        <h1>{this.state.current} de 10</h1>
        <Button
          click={() => {
            this.updateCurrent(this.state.current);
          }}
          text="Update question"
        />
      </div>
    );
  }
}

export default QuestionCounter;
