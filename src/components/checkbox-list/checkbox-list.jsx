import React, { Component } from "react";

class checkboxList extends Component {
  render() {
    return <div className="form-check">
      {this.props.generos.map((genero) => <div key={genero}>
        <input type="checkbox" className="form-check-input" name={genero}></input>
        <label htmlFor={genero}>{genero}</label></div>
      )}

    </div>

  }
}

export default checkboxList;