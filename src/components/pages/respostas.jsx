import React, { Component } from "react";
import Title from "../title";
import Questionslist from "../questions-list";
import Answerlist from "../answers-list";
import Button from "../button";
import { Link } from "react-router-dom";

class Respostas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            respostas: [],
            perguntas: []
        }
    }

    componentDidMount() {
        this.setState({
            perguntas: this.props.location.state.perguntas,
            respostas: this.props.location.state.respostas
        })
    }

    render() {
        console.log(this.state.respostas, this.state.perguntas, "RESPOSTAS E PERGUNTAS")
        return (
            <div id="respostas">
                <div className="col-12 text-center" id="tituloPontuacao">
                    <Title title="Respostas" />
                </div>

                <div className="row">
                    <div className="col-6">
                        <p>PERGUNTAS</p>
                        <Questionslist perguntas={this.state.perguntas} />
                    </div>

                    <div className="col-6">
                        <p>SUAS RESPOSTAS</p>
                        <Answerlist respostas={this.state.respostas.slice(0, this.state.perguntas.length)} />
                    </div>
                </div>

                <div className="my-5 d-flex justify-content-between col-4 offset-4" >
                    <Link to={{ pathname: "/inicio" }} >
                        <div>
                            <Button text="Jogar Novamente" />
                        </div>
                    </Link>

                    <Link
                        to={{ pathname: "/tela-inicial" }}
                    >
                        <div>
                            <Button text="Voltar ao inicio" />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Respostas;
