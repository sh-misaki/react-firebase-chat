import { combineReducers } from "redux";
import { getType } from "typesafe-actions";
import { PayloadAction } from "typesafe-actions/dist";

import actions from "./actions"
import { IUser } from "./models"

const auth = (state: any, action: PayloadAction<string, IUser>) => {
  console.log('auth reducer', state, action)
  switch (action.type) {
    case getType(actions.signin):
      return action.payload;
    case getType(actions.signout):
      return null
    default:
      return state
  }
}

const authReducer = combineReducers({
  auth,
})

export default authReducer;
