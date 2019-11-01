import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as firebase from "firebase/app";

import PrivateRoute from "./private";

import Chat from "containers/chat";
import Login from "containers/login";

export default class App extends Component {
  public componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
      } else {
        console.log(user)
      }
    });
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Login signup />
          </Route>
          <PrivateRoute path="/">
            <Switch>
              <Route exact path="/">
                hoge
              </Route>
              <Route exact path="/chat">
                <Chat />
              </Route>
            </Switch>
          </PrivateRoute>
          <Route path="*">
            No Match
          </Route>
        </Switch>
      </Router>
    );
  }
}
