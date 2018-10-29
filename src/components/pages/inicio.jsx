import React, { Component } from "react";
import Button from "../button";
import CheckboxList from "../checkbox-list";
import RadioList from "../radio-list";
import { Link } from "react-router-dom";
import { Prompt } from "react-router";

class Inicio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generos: ["Terror", "Romance", "Ficção Cientifica", "Drama", "Ação"],
      dificuldades: ["Fácil", "Médio", "Difícil"],
      selectedDifficulty: null,
      selectedGenres: []
    };
    this.getSelectedDifficulty = this.getSelectedDifficulty.bind(this);
    this.getSelectedGenres = this.getSelectedGenres.bind(this);
  }
  getSelectedDifficulty(newDifficulty) {
    this.setState({ selectedDifficulty: newDifficulty }, () => {
    });
  }
  getSelectedGenres(genres) {
    this.setState({ selectedGenres: genres }, () => {
    });
  }

  render() {
    return (
      <div>
        <div className="row col-1">
          <Link to="/">
            <Button text={"Voltar"} />
          </Link>
        </div>
        <div id="btnComecar" className="row offset-5 col-2">
          <Link
            to={{
              pathname: "/filmes",
              state: {
                dificuldade: this.state.selectedDifficulty,
                generos: this.state.selectedGenres
              }
            }}
          >
            <Prompt
              when={this.componentWillUnmount}
              message="Deseja começar a partida?"
            />
            <Button text={"Começar Partida"} />
          </Link>
        </div>
        <div className="align-self-center row">
          <div className="col-1 offset-5">
            <RadioList
              getSelectedDifficulty={this.getSelectedDifficulty}
              dificuldades={this.state.dificuldades}
            />
          </div>
          <div className="col-2 ">
            <CheckboxList
              getSelectedGenres={this.getSelectedGenres}
              generos={this.state.generos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
