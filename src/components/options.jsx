import React, { Component } from "react";
import ButtonOptions from "./buttonOptions";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        target: null,
        style: { backgroundColor: "red" },
        movies: [],
        perguntas: []
      }
    };
    this.resolveResposta = this.resolveResposta.bind(this);
  }

  handleClick = index => this.setState({ activeIndex: index });
  componentDidMount() {
    this.setState(
      { movies: this.props.movies[1], perguntas: this.props.movies[0] },
      () => {}
    );
  }
  resolveResposta(movie) {
    if (this.state.perguntas) {
      if (this.state.perguntas[2] === "anofilme") {
        return movie[2];
      } else if (this.state.perguntas[2] === "diretorfilme") {
        return movie[3];
      } else if (this.state.perguntas[2] === "nomefilme") {
        return movie[1];
      } else if (this.state.perguntas[2] === "sinopsefilme") {
        return movie[5];
      } else {
        return "t";
      }
    }
  }

  render() {
    if (this.state.movies) {
      return (
        <div className="btn-group-vertical mx-auto " role="group">
          {this.state.movies.map((movie, index) => (
            <ButtonOptions
              key={movie}
              classname="btn btn-op btn-lg"
              name=""
              index={index}
              isActive={this.state.activeIndex === index}
              onClick={this.handleClick}
              text={this.resolveResposta(movie)}
            />
          ))}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Options;
