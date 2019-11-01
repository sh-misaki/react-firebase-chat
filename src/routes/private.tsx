import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { IUser } from "store/ducks/auth/models";

interface Props {
  user: IUser | null;
}

const PrivateRoute: React.FunctionComponent<Props & RouteProps> = ({
  children,
  user,
  ...rest
}) => {
  return (
    <Route {...rest}>
      {
        user !== null
        ? children
        : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: rest.location }
            }}
          />
        )
      }
    </Route>
  );
}

export default PrivateRoute;
