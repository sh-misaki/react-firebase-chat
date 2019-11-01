import { createStandardAction } from "typesafe-actions";

import { IAuthState } from "./models";
import { AUTH } from "./constants";

export const signin = createStandardAction(AUTH.SIGN_IN)<IAuthState["auth"]>();
export const signout = createStandardAction(AUTH.SIGN_OUT)();

export default {
  signin,
  signout,
}
