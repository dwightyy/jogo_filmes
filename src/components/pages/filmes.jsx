import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Cookies from "js-cookie";
import Button from "../button";
var { film } = require("../filmes");
console.log(film);
class Filmes extends Component {
  state = {
    dificuldade: "Fácil", //Cookies.get("dificuldade"),
    nCards: null
  };
  filmes = {};

  getRandomNumber(maximum) {
    return Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
  }

  getRandomNumbers(nFilmes, qntFilmes) {
    var ls = [];
    while (ls.length < qntFilmes) {
      if (ls.length === 0) {
        ls.push(this.getRandomNumber(nFilmes));
      } else if (ls.length < qntFilmes) {
        var num = this.getRandomNumber(nFilmes);
        while (ls.length < qntFilmes) {
          for (var i of ls) {
            if (i === num) {
              num = this.getRandomNumber(nFilmes);
            }
          }
          ls.push(num);
        }
      }
      if (ls.length === qntFilmes) {
        return ls;
      }
    }
  }

  handleDificulty(nFilmes) {
    if (this.state.dificuldade === "Fácil") {
      var lsRandomNumbers = this.getRandomNumbers(nFilmes, 3);
      console.log(lsRandomNumbers);
    }
    return lsRandomNumbers;
  }

  render() {
    const nFilmes = film.length;
    var lsRandomNumbers = this.handleDificulty(nFilmes);
    console.log(lsRandomNumbers);

    return (
      <div>
        <Link to={{ pathname: "/questoes" }}>
          <Button text="Proxima" />
        </Link>
      </div>
    );
  }
}

export default Filmes;
