import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as firebase from "firebase/app";
import { connect, MapDispatchToPropsParam } from 'react-redux';

import { StateAll } from "store/ducks/types";
import { authOperations, authSelectors } from "store/ducks/auth";

import PrivateRoute from "./private";

import Chat from "containers/Chat";
import SignIn from "containers/SignIn";
import { IUser } from "store/ducks/auth/models";

interface IProps {
  user: IUser | null;
  signin(user: IUser): void;
  signout(): void;
}

interface IStates {
  authFetched: boolean;
}

class Routes extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    
    this.state = { authFetched: false };
  }

  public componentDidMount() {
    const { signin, signout } = this.props;
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
        signin(user);
      } else {
        signout();
      }

      this.setState({
        authFetched: true,  
      })
    });
  }

  render() {
    if (!this.state.authFetched) return <div />;
    return (
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignIn signup />
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

const mapStateToProps = (state: StateAll) => ({
  user: authSelectors.getUser(state),
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({
  signin: (user: IUser) => {
    dispatch(authOperations.signin(user))
  },
  signout: () => {
    dispatch(authOperations.signout())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
