import React, { useEffect } from "react";
import {
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { IUser } from "store/ducks/auth/models";

interface Props {
  path: string;
  user: IUser | null;
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
