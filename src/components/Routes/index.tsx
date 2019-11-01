import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as firebase from "firebase/app";

import PrivateRoute from "./private";

import Chat from "containers/Chat";
import SignIn from "containers/SignIn";
import Top from "containers/Top";
import { Domains } from "types";

interface IStateProps {
  user: Domains.IUser | null;
}

interface IDispatchProps {
  signin(user: Domains.IUser): void;
  signout(): void;
}

type IProps = IStateProps & IDispatchProps;

interface IStates {
  authFetched: boolean;
}

class Routes extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      authFetched: false,
    }
  }

  public componentDidMount() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const user = {
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          emailVerified: firebaseUser.emailVerified,
          isAnonymous: firebaseUser.isAnonymous,
          phoneNumber: firebaseUser.phoneNumber,
          photoURL: firebaseUser.photoURL,
          refreshToken: firebaseUser.refreshToken,
          uid: firebaseUser.uid,
        };
        this.props.signin(user);
      } else {
        this.props.signout();
      }

      this.setState({
        authFetched: true,
      });
    });
  }


  render() {
    const { user } = this.props;
    const { authFetched } = this.state;
    if (!authFetched) return <div />;

    return (
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn
              user={user}
            />
          </Route>
          <Route path="/signup">
            <SignIn
              user={user}
              signup
            />
          </Route>
          <PrivateRoute
            path="/"
            user={user}
          >
            <Switch>
              <Route exact path="/">
                <Top />
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

export default Routes;
