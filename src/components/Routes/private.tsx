import React, { Component } from "react";
import {
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import * as firebase from "firebase/app";
import { IUser } from "store/ducks/auth/models";

interface Props {
  path: string;
  user: IUser | null;
  signin(user: IUser): void;
  signout(): void;
}

interface States {
  authFetched: boolean;
}

class PrivateRoute extends Component<Props & RouteComponentProps<{}>, States> {
  constructor(props: Props & RouteComponentProps) {
    super(props);

    this.state = {
      authFetched: false,
    }
  }

  public componentDidMount() {
    console.log('componentDidMount')
    const { signin, signout, history, location } = this.props;
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
        const { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);
      }

      this.setState({
        authFetched: true,
      });
    });
  }

  render() {
    if (!this.state.authFetched) return <div />;

    const {
      user,
      signin,
      signout,
      children,
      ...rest
    } = this.props;

    return (
      <Route {...rest}>
        { children }
      </Route>
    );
  }
}

export default withRouter(PrivateRoute);
