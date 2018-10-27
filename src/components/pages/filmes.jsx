import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "../button";
import Card from "../card";
import Timer from "../timer";
var { film } = require("../filmes");

class Filmes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenres: this.props.location.state.generos,
      selectedDifficulty: this.props.location.state.dificuldade,
      moviesByGenre: null,
      finalMovies: [],
      timer: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
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
  getLsGenres(genres) {
    var consolidatedGenres = [];
    for (var g of genres) {
      for (var f of film[g]) {
        consolidatedGenres.push(f);
      }
    }
    consolidatedGenres = this.shuffleArray(consolidatedGenres);
    consolidatedGenres = this.shuffleArray(consolidatedGenres);
    return consolidatedGenres;
  }
  getMoviesByDifficult(difficulty, movies) {
    var selecionados;
    if (difficulty === "Fácil") {
      selecionados = movies.slice(0, 3);
    } else if (difficulty === "Médio") {
      selecionados = movies.slice(0, 4);
    } else if (difficulty === "Difícil") {
      selecionados = movies.slice(0, 5);
    }
    return selecionados;
  }
  componentDidMount() {
    let genres = this.getLsGenres(this.state.selectedGenres);
    this.setState({ moviesByGenre: genres }, () => {
      var movies = this.getMoviesByDifficult(
        this.state.selectedDifficulty,
        this.state.moviesByGenre
      );
      this.setState({ finalMovies: movies });
    });
  }

  render() {
    if (this.state.timer === "end") {
      return (
        <Redirect
          to={{
            pathname: "/questoes",
            state: { finalMovies: this.state.finalMovies }
          }}
        />
      );
    }
    const finzaliza = () => {
      this.setState({ timer: "end" });
    };

    return (
      <div>
        <div className="col-12 text-center">
          <h1>
            <Timer
              dificuldade={this.state.selectedDifficulty}
              callbackFinalizado={finzaliza}
            />
          </h1>
        </div>
        <div className="">
          <div className="d-flex text-center justify-content-center ">
            {this.state.finalMovies.map(movie => (
              <Card
                classname={"card"}
                key={movie[1]}
                genero={movie[0]}
                titulo={movie[1]}
                ano={movie[2]}
                diretor={movie[3]}
                ator={movie[4]}
                sinopse={movie[5]}
                imagem={movie[6]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Filmes;
