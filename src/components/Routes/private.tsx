import React, { useEffect } from "react";
import {
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Domains } from "types";

interface Props {
  path: string;
  user: Domains.IUser | null;
}

const PrivateRoute: React.FunctionComponent<Props> = ({
  user,
  children,
  ...rest
}) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (user !== null) return;
    const { from } = location.state || { from: { pathname: "/signin" } };
    history.replace(from);
  }, [user, history, location.state])

  return (
    <Route {...rest}>
      { children }
    </Route>
  );
}

export default PrivateRoute;
