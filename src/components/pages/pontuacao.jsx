import React, { Component } from "react";
import Title from "../title";
import Button from "../button";
import { Link } from "react-router-dom";
import Modal from "react-modal";

class Pontuacao extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <div className="col-4 offset-4 text-center">
          <Title title="Pontuação Final" />
        </div>
        <div className="my-5 col-4 offset-4 text-center">
          <h1>Pontuação 0 de 10</h1>
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
            <div className="App">
              <button onClick={this.toggleModal}>Open the modal</button>

              <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                Here's some content for the modal
              </Modal>
            </div>
            <Button text="Ver correção" />
          </div>
        </div>
      </div>
    );
  }
}

export default Pontuacao;
