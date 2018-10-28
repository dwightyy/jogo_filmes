import React, { Component } from "react";
import Title from "../title";
import Button from "../button";
import { Link } from "react-router-dom";

class Pontuacao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      acertos: 0,
      total: 0
    };
  }
  render() {
    console.log(
      this.props.location.state.acertos,
      this.props.location.state.total
    );
    if (
      this.props.location.state.acertos != undefined &&
      this.props.location.state.total != undefined
    ) {
      return (
        <div>
          <div className="col-4 offset-4 text-center">
            <Title title="Pontuação Final" />
          </div>
          <div className="my-5 col-4 offset-4 text-center">
            <h1>
              Pontuação {this.props.location.state.acertos} de&nbsp;
              {this.props.location.state.total}
            </h1>
          </div>
          <div className="my-5 d-flex justify-content-between col-4 offset-4">
            <div>
              <Button text="Jogar Novamente" />
            </div>
            <Link
              to={{ pathname: "/inicio", state: { pontos: this.state.pontos } }}
            >
              <div>
                <Button text="Voltar ao inicio" />
              </div>
            </Link>
            <div>
              <div className="App" />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Pontuacao;
