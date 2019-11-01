import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";

const PrivateRoute: React.FunctionComponent<RouteProps> = ({
  children,
  ...rest
}) => {
  return (
    <Route {...rest}>
      {
        false
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
