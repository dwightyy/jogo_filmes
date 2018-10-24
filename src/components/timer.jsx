import React, { Component } from "react";
const ms = require("pretty-ms");

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }
  componentDidMount() {
    this.startTimer();
  }
  actual() {
    let dificuldade = this.props.dificuldade;
    if (dificuldade === "Fácil" && this.state.time > 300000) {
      this.props.callbackFinalizado();
    } else if (dificuldade === "Médio" && this.state.time > 4000) {
      this.props.callbackFinalizado();
    } else if (dificuldade === "Difícil" && this.state.time > 5000) {
      this.props.callbackFinalizado();
    } else {
      return ms(this.state.time);
    }
  }
  render() {
    return (
      <div>
        <h3>{this.actual()}</h3>
      </div>
    );
  }
}

export default Timer;
