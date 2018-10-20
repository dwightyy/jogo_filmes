import React, { Component } from "react";
import TelaInicial from "./pages/tela-inicial";
import { Route, Switch } from "react-router-dom";
import Inicio from "./pages/inicio";

class App extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TelaInicial} />
        <Route path="/inicio" component={Inicio} />
        <TelaInicial />
      </Switch>
    );
  }
}

export default App;
