import { PayloadAction } from "typesafe-actions/dist";

import { IOpenChatsState, initOpenChats } from "./models"

const OpenChatsReducer = (state: IOpenChatsState = initOpenChats, action: PayloadAction<string, IOpenChatsState>) => {
  switch (action.type) {
    default:
      return state
  }
}

export default OpenChatsReducer;
