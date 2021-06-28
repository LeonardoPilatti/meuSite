/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Habilidades from './Pages/Habilidades';
import Portfolio from './Pages/Portfolio';
import Contato from './Pages/Contato';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Sobre">
        <Sobre />
      </Route>
      <Route exact path="/Habilidades">
        <Habilidades />
      </Route>
      <Route exact path="/Portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/Contato">
        <Contato />
      </Route>
    </Switch>
  );
};
