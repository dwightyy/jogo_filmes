import React, { Component } from "react";
import Button from "../button";
import QuestionCounter from "../questionCounter";
import Paragraph from "../paragraph";
import Options from "../options";
import Redirect from "react-router-dom/Redirect";
import ButtonOptions from "../buttonOptions";
import ReactDOM from "react-dom";

class Questoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      respostas: [],
      finalQuestions: [],
      finalizado: false,
      currentQuestion: 0,
      respostaSelecionada: "",
      respostasSelecionadas: "",
      acertos: 0
    };
    this.respostaSelecionada = this.respostaSelecionada.bind(this);
    this.handleClickProximaPergunta = this.handleClickProximaPergunta.bind(
      this
    );
  }

  componentDidMount() {
    this.setState({ movies: this.props.location.state.finalMovies }, () => {
      this.montaPerguntas();
    });
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
      [`A sinopse "${movie[5]}" é de qual filme?`, movie[1], "nomefilme"],
      [
        `O filme "${movie[1]}",  foi lançado em qual ano?`,
        movie[2],
        "anofilme"
      ],
      [
        `Qual o nome do(a) diretor(a) do filme "${movie[1]}"?`,
        movie[3],
        "diretorfilme"
      ],
      [
        `O(A) ator/atriz "${movie[4]}", é personagem principal de qual filme?`,
        movie[1],
        "nomefilme"
      ],
      [
        `Em qual ano foi lançado o filme do(a) diretor(a), "${movie[3]}"?`,
        movie[2],
        "anofilme"
      ],
      [
        `Qual o(a) ator/atriz que é personagem principal neste film, "${movie[1]}"?`,
        movie[4],
        "atorfilme"
      ]
    ];
    return questions;
  }

  montaLsRespostas(finalMovies, finalQuestions) {
    let respostas = [];
    for (let pergunta of finalQuestions) {
      let aux = [];
      if (pergunta[2] === "anofilme") {
        for (let filme of finalMovies) {
          aux.push(filme[2]);
        }
      } else if (pergunta[2] === "nomefilme") {
        for (let filme of finalMovies) {
          aux.push(filme[1]);
        }
      } else if (pergunta[2] === "diretorfilme") {
        for (let filme of finalMovies) {
          aux.push(filme[3]);
        }
      } else if (pergunta[2] === "atorfilme") {
        for (let filme of finalMovies) {
          aux.push(filme[4]);
        }
      }
      respostas.push(aux);
    }
    this.setState(
      { respostas: respostas, finalQuestions: finalQuestions },
      () => {
        this.setState({
          finalizado: true
        });
      }
    );
  }
  respostaSelecionada(resp) {
    this.setState({ respostaSelecionada: resp });
  }

  montaPerguntas() {
    var todasPerguntas = [];
    this.state.movies.map(movie => {
      let pergunta = this.montaPergunta(movie);
      for (var p of pergunta) {
        todasPerguntas.push(p);
      }
    });
    var perguntasEmbalharadas = this.shuffleArray(todasPerguntas);

    var lsRespostas = this.montaLsRespostas(
      this.state.movies,
      perguntasEmbalharadas.splice(0, this.state.movies.length * 2)
    );
  }
  limpaRespostas() { }

  handleClickProximaPergunta() {
    if (this.state.respostaSelecionada != undefined) {
      if (this.state.currentQuestion <= this.state.movies.length * 2 - 1) {
        let aux = this.state.currentQuestion;
        let auxAcertos = this.state.acertos;
        if (
          this.state.respostaSelecionada ===
          this.state.finalQuestions[this.state.currentQuestion][1]
        ) {
          this.setState({ acertos: auxAcertos + 1 });
        }
        this.setState({ respostasSelecionadas: this.state.respostasSelecionadas + this.state.respostaSelecionada + "," })
        this.setState({ currentQuestion: aux + 1 }, () => {
          if (this.state.currentQuestion > this.state.movies.length * 2 - 1) {
          }
        });
      }
    }
  }
  render() {
    console.log(this.state.finalQuestions, "questões finais")
    console.log(this.state.respostasSelecionadas, "respostas finais")
    if (
      this.state.finalizado === true &&
      this.state.currentQuestion <= this.state.movies.length * 2 - 1
    ) {
      return (
        <div id="questoes">
          <div id="contador">
            <QuestionCounter
              total={this.state.movies.length}
              current={this.state.currentQuestion}
            />
          </div>
          <div id="texto">
            <Paragraph
              paragraph={this.state.finalQuestions[this.state.currentQuestion][0]}
            />
          </div>
          <div>
            <Options
              respostas={this.state.respostas[this.state.currentQuestion]}
              novaPergunta={this.novaPergunta}
              getResposta={this.respostaSelecionada}
            />
          </div>
          <div id="questoesButao">
            <Button
              click={this.handleClickProximaPergunta}
              text={"Proxima Pergunta"}
            />
          </div>
        </div>
      );
    } else if (
      this.state.currentQuestion > this.state.movies.length * 2 - 1 &&
      this.state.movies.length > 0
    ) {
      return (
        <Redirect
          to={{
            pathname: "/pontuacao",
            state: {
              acertos: this.state.acertos,
              total: this.state.movies.length * 2,
              perguntas: this.state.finalQuestions,
              respostas: this.state.respostasSelecionadas
            }
          }}
        />
      );
    } else {
      return null;
    }
  }
}

export default Questoes;
