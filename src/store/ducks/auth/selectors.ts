import { createSelector, Selector } from "reselect"

import { StateAll } from "../types"
import { IUser, IAuthState } from "./models"

export const rootSelector: Selector<StateAll, IAuthState> = (state: StateAll) => state.auth;

const getUser = createSelector(
  rootSelector,
  (state: IAuthState) => {
    return state.auth;
  }
)

export default {
  getUser,
}
