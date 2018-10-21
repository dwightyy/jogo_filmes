import React, { Component } from "react";
import Button from "../button";
import CheckboxList from "../checkbox-list";
import RadioList from "../radio-list";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.gravaCookie = this.gravaCookie.bind(this);
  }
  state = {
    generos: ["Terror", "Drama", "Ficção Cientifica", "Ação", "Romance"],
    dificuldades: ["Fácil", "Médio", "Difícil"],
    dific: "vazio"
  };
  getDificuldade = dificu => {
    this.setState({ dific: dificu });
    console.log("chamou", dificu, this.state.dific);
  };

  componentDidMount() {
    console.log(document.querySelector('input[name="dificuldade"]'));
  }
  componentWillUnmount() {
    this.getd();
  }

  getd() {
    return this.state.dific;
  }

  gravaCookie() {
    console.log(this.state.dific, "#");
    Cookies.set("dificuldade", this.state.dific);
    console.log(Cookies.get("dificuldade"));
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
                dificuldade: this.state.dific
              }
            }}
          >
            <Button click={this.gravaCookie} text={"Começar Partida"} />
          </Link>
        </div>
        <div className="align-self-center row">
          <div className="col-1 offset-5">
            <RadioList
              callback={this.getDificuldade}
              dificuldades={this.state.dificuldades}
            />
          </div>
          <div className="col-2 ">
            <CheckboxList generos={this.state.generos} />
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
