import React, { Component } from "react";
import Button from "../button";
import Title from "../title";
import Paragraph from "../paragraph";
import { Link } from "react-router-dom";
import Header from "../header";

class TelaInicial extends Component {
  state = {
    instrucoes:
      "Aqui no MemoMovie você irá testar sua memória e aprender mais sobre a 7ª arte. Assim que escolher a dificuldade desejada e os generos com os quais deseja jogar, serão apresentados filmes com suas respectivas informações com um tempo desposto para sua leitura. Após o termino do tempo de leitura, você será redirecionado a uma pagina para responder as perguntas referentes aos filmes que acabara de ler. Ao final será apresentada sua pontuação. Boa Sorte!"
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12" id="title-header">
            <Header alignment={"text-center"} header={"MemoMovie"} />
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-md-1">
            <Title alignment={"text-center"} title={"Instruções"} />
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-md-1" id="paragraph-div">
            <Paragraph paragraph={this.state.instrucoes} />
          </div>
          <div className="col-4 text-center align-self-center" id="button-div">
            <Link to="/inicio">
              <Button text={"Iniciar"} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TelaInicial;
