import React, { Component } from "react";
import "../js/checkboxBehaviour";

class checkboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenres: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var selecionado = event.target.checked;
    var genero = event.target.value;
    var lsSelecionados = this.state.selectedGenres;
    console.log(lsSelecionados);
    if (selecionado) {
      lsSelecionados.push(genero);
    } else {
      lsSelecionados.splice(lsSelecionados.indexOf(genero), 1);
    }
    this.setState({ selectedGenres: lsSelecionados }, () => {
      console.log(this.state.selectedGenres);
      this.props.getSelectedGenres(this.state.selectedGenres);
    });
  }

  render() {
    return (
      <div className="form-check">
        <ul>
          <li>
            <input
              className="form-check-input option"
              type="checkbox"
              name="todos"
              id="todos"
            />
            <label htmlFor="todos">Todos </label>
          </li>
          <ul>
            {this.props.generos.map((genero, index) => (
              <div key={genero}>
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  className="form-check-input subOption"
                  name={genero}
                  value={index}
                />
                <label htmlFor={genero}>{genero}</label>
              </div>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

export default checkboxList;
