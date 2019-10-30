import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Chat from "containers/chat";

import Login from "containers/login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Login signup />
          </Route>
          <Route path="*">
            No Match
          </Route>
        </Switch>
      </Router>
    );
  }
}
