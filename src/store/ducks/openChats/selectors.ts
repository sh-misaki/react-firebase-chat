import { createSelector, Selector } from "reselect"

import { IStateAll } from "../types"
import { IOpenChatsState } from "./models"

export const rootSelector: Selector<IStateAll, IOpenChatsState> = (state: IStateAll) => state.openChats;

const getStates = createSelector(
  rootSelector,
  (state: IOpenChatsState) => {
    return state;
  }
)

export default {
  getStates,
}
