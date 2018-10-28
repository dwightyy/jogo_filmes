import React, { Component } from "react";
import ButtonOptions from "./buttonOptions";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "",
      target: null,
      movies: [],
      perguntas: []
    };
    this.pegaStrResposta = this.pegaStrResposta.bind(this);
  }

  handleClick = index => {
    this.setState({ activeIndex: index });
  };

  pegaStrResposta(resposta) {
    this.setState({ currentSelected: resposta }, () => {
      this.props.getResposta(resposta);
    });
  }
  render() {
    if (this.props.respostas !== []) {
      return (
        <div className="btn-group-vertical mx-auto " role="group">
          {this.props.respostas.map((resposta, index) => (
            <ButtonOptions
              flagResetaBotao={this.props.flagResetaBotao}
              key={resposta}
              classname="btn btn-op btn-lg album "
              getOp={this.pegaStrResposta}
              index={index}
              isActive={this.state.activeIndex === index}
              onClick={this.handleClick}
              text={resposta}
            />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Options;
