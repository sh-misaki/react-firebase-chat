import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from "./private";

import Chat from "containers/Chat";
import SignIn from "containers/SignIn";
import { IUser } from "store/ducks/auth/models";

interface IProps {
  user: IUser | null;
  signin(user: IUser): void;
  signout(): void;
}

const Routes: FunctionComponent<IProps> = ({
  user,
  signin,
  signout,
}) => {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignIn signup />
        </Route>
        <PrivateRoute
          path="/"
          user={user}
          signin={signin}
          signout={signout}
        >
          <Switch>
            <Route exact path="/">
              TOP
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

export default Routes;
