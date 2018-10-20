import React, { Component } from "react";
import "../js/checkboxBehaviour";

class checkboxList extends Component {
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
            {this.props.generos.map(genero => (
              <div key={genero}>
                <input
                  type="checkbox"
                  className="form-check-input subOption"
                  name={genero}
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
