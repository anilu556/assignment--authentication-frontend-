import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import MenuAppBar from "./components/MenuAppBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Books from "./components/Books";
import Loans from "./components/Loans";
import PrivateRoute from "./components/PrivateComponent";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MenuAppBar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/login" exact component={ Login } />
          <Route path="/signup" exact component={ Signup } />
          <PrivateRoute path="/books" exact component={ Books } />
          <PrivateRoute path="/loans" exact component={ Loans } />
        </Switch>
      </div>
    );
  }
}

export default App;
