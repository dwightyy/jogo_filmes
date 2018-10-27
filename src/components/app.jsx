import React, { Component } from "react";
import TelaInicial from "./pages/tela-inicial";
import { Route, Switch } from "react-router-dom";
import Inicio from "./pages/inicio";
import Filmes from "./pages/filmes";
import Questoes from "./pages/questoes";
import Pontuacao from "./pages/pontuacao";
class App extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TelaInicial} />
        <Route path="/inicio" component={Inicio} />
        <Route path="/filmes" component={Filmes} />
        <Route path="/questoes" component={Questoes} />
        <Route path="/pontuacao" component={Pontuacao} />
        <TelaInicial />
      </Switch>
    );
  }
}

export default App;
