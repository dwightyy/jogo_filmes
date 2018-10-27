import React, { Component } from "react";

class RadioList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      dific: null
    };
  }
  handleChange(event) {
    this.setState({ dific: event.target.value }, () => {
      this.props.getSelectedDifficulty(this.state.dific);
    });
  }
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
