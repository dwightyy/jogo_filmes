import React, { Component } from "react";

class Answerlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol>
                {this.props.respostas.map((resposta) => (
                    <li>{resposta}</li>
                ))}
            </ol>

        );
    }
}

export default Answerlist;
