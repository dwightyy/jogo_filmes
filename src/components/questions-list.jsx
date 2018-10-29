import React, { Component } from "react";

class Questionslist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ol>
        {this.props.perguntas.map((pergunta) => (
          <div>
            <li>{pergunta[0]} </li>
            <ul><li>Resposta Correta: {pergunta[1]}</li></ul>
          </div>
        ))}
      </ol>
    );
  }
}

export default Questionslist;
