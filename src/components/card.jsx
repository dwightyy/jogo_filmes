import React, { Component } from "react";
import Placeholder from "../assets/Placeholder.jpg";

class CardFilme extends Component {
  state = {};
  render() {
    return (
      <div className="card col-2 offset-1">
        <img className="card-img-top" src={Placeholder} alt="Card image cap" />
        <div className="card-body">
          <h4 className="card-title">{this.props.titulo}</h4>
          <hr />
          <h5>
            Genero:&nbsp;
            <span>{this.props.genero}</span>
            <hr />
          </h5>
          <h5>
            Ano:&nbsp;
            <span>{this.props.ano}</span>
            <hr />
          </h5>
          <h5>
            Diretor:&nbsp;
            <span>{this.props.diretor}</span>
            <hr />
          </h5>
          <h5>
            Ator:&nbsp;
            <span>{this.props.ator}</span>
            <hr />
          </h5>
          <h5>
            Sinopse:&nbsp;
            <p className="card-text">{this.props.sinopse}</p>
          </h5>
        </div>
      </div>
    );
  }
}

export default CardFilme;
