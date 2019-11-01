import { createSelector, Selector } from "reselect"

import { IStateAll } from "../types"
import { IAuthState } from "./models"

export const rootSelector: Selector<IStateAll, IAuthState> = (state: IStateAll) => state.auth;

const getUser = createSelector(
  rootSelector,
  (state: IAuthState) => {
    return state.auth;
  }
)

export default {
  getUser,
}
