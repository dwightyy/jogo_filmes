import React, { Component } from "react";
import Button from "../button";
import CheckboxList from "../checkbox-list";
import { Link } from "react-router-dom";
class Inicio extends Component {
  state = {
    generos: ["Terror", "Drama", "Ficção Cientifica", "Ação", "Romance"]
  };
  render() {
    return (
      <div>
        <div className="row col-1">
          <Link to="/">
            <Button text={"Voltar"} />
          </Link>
        </div>
        <div className="row offset-5 col-2">
          <Button text={"Começar Partida"} />
        </div>
        <div className="col-2 offset-6 row">
          <CheckboxList generos={this.state.generos} />
        </div>
      </div>
    );
  }
}

export default Inicio;
