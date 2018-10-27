import React, { Component } from "react";
var images = require.context('../assets', true);

class CardFilme extends Component {
  state = {};
  render() {

    let img_src = images(`${this.props.imagem}`)

    return (
      <div className="card col-2 offset-1">
        <img className="card-img-top" src={img_src} alt="Card" />
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
