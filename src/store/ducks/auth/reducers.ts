import { combineReducers } from "redux";
import { getType } from "typesafe-actions";
import { PayloadAction } from "typesafe-actions/dist";

import actions from "./actions"
import { IAuthState, initAuth } from "./models"

const authReducer = (state: IAuthState = initAuth, action: PayloadAction<string, IAuthState>) => {
  switch (action.type) {
    case getType(actions.signin):
      return action.payload;
    case getType(actions.signout):
      return { auth: null };
    default:
      return state
  }
}

export default authReducer;
