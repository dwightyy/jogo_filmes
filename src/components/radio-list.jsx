import React, { Component } from "react";

class RadioList extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      dific: document.querySelector('input[name="dificuldade"]:checked').value
    });
    this.setState({
      dific: event.target.value
    });
    this.props.callback(this.state.dific);
  }

  state = {
    dific: "test"
  };
  render() {
    return (
      <div className="form-check">
        {this.props.dificuldades.map(dificuldade => (
          <div key={dificuldade}>
            <input
              checked={this.state.dific === dificuldade}
              onChange={this.handleChange}
              type="radio"
              className="form-check-input"
              name="dificuldade"
              value={dificuldade}
            />
            <label htmlFor={dificuldade}>{dificuldade}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default RadioList;
