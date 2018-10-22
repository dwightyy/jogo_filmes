import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import QuestionCounter from "../questionCounter";
import Paragraph from "../paragraph";
import Options from "../options";

class Questoes extends Component {
  state = {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at fermentum quam. Praesent maximus felis tortor. Cras dui sem, molestie congue ipsum eget, fermentum aliquet sapien. Suspendisse potenti. Quisque dignissim, lectus non luctus scelerisque, tellus tortor ullamcorper enim, in porttitor dolor mauris eu nulla. Pellentesque et erat ex. Suspendisse eget mattis libero. Curabitur ac ante orci. Ut in dignissim nibh. Nulla sed iaculis nibh. Nunc molestie pharetra tellus, nec iaculis ex imperdiet id. "
  };
  render() {
    return (
      <div>
        <div className="row mx-auto col-4 offset-4">
          <QuestionCounter />
        </div>
        <div className="text-center row col-4 offset-4">
          <Paragraph paragraph={this.state.question} />
        </div>
        <div className="row col-4 offset-4">
          <Options />
        </div>
        <div id="btnEncerrar" className="row col-2 offset-10">
          <Link to="/pontuacao">
            <Button classname="btn " text="Encerrar partida" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Questoes;
