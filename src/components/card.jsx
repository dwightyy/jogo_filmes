import React, { Component } from "react";
import Placeholder from "../assets/Placeholder.jpg";

class CardFilme extends Component {
  state = {};
  render() {
    return (
      <div className="card col-2 offset-1">
        <img className="card-img-top" src={Placeholder} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.nomeFilme}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default CardFilme;
