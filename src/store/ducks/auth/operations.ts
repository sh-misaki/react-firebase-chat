import { Dispatch } from "redux";

import actions from "./actions";
import { IUser } from "./models";

const signin = (user: IUser) => (dispatch: Dispatch) => {
  return dispatch(actions.signin(user));
}

const signout = () => (dispatch: Dispatch) => {
  return dispatch(actions.signout());
}

export default {
  signin,
  signout,
}
