import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../button";
import QuestionCounter from "../questionCounter";
import Paragraph from "../paragraph";
import Options from "../options";

class Questoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      perguntas: []
    };
  }
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  montaPergunta(movie) {
    let questions = [
      [`A sinopse '${movie[5]}' é de qual filme?`, movie[1], "nomefilme"],
      [
        `O filme '${movie[1]}',  foi lançado em qual ano?`,
        movie[2],
        "anofilme"
      ],
      [
        `Qual o nome do diretor do filme '${movie[1]}'?`,
        movie[3],
        "diretorfilme"
      ],
      [
        `O ator '${movie[4]}', é personagem principal de qual filme?`,
        movie[1],
        "nomefilme"
      ],
      [
        `A sinopse  '${movie[5]}'  é de um filme que foi lançado em qual ano? `,
        movie[2],
        "sinopsefilme"
      ],
      [
        `Em qual ano foi lançado o filme do diretor, '${movie[3]}'?`,
        movie[2],
        "anofilme"
      ]
    ];
    return questions;
  }

  montaPerguntas() {
    var todasPerguntas = [];
    this.state.movies.map(movie => {
      let pergunta = this.montaPergunta(movie);
      for (var p of pergunta) {
        todasPerguntas.push(p);
      }
    });
    var todasPerguntasEmbaralhadas = this.shuffleArray(todasPerguntas);
    return todasPerguntasEmbaralhadas;
  }
  componentDidMount() {
    this.setState({ movies: this.props.location.state.finalMovies }, () => {
      let perguntasFinal = this.montaPerguntas();
      this.setState({ perguntas: perguntasFinal }, () => {});
    });
  }

  render() {
    if (this.state.perguntas[0]) {
      var filmesEPerguntas = [this.state.perguntas[0], this.state.movies];
      return (
        <div>
          <div className="row mx-auto col-4 offset-4">
            <QuestionCounter />
          </div>
          <div className="text-center row col-4 offset-4">
            <Paragraph paragraph={this.state.perguntas[0][0]} />
          </div>
          <div className="row col-4 offset-4">
            <Options movies={filmesEPerguntas} />
          </div>
          <div id="btnEncerrar" className="row col-2 offset-10">
            <Link to="/pontuacao">
              <Button classname="btn " text="Encerrar partida" />
            </Link>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Questoes;
