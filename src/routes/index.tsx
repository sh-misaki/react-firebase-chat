import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Chat from "containers/chat";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="*">
            No Match
          </Route>
        </Switch>
      </Router>
    );
  }
}
