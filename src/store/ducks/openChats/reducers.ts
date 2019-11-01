import { getType } from "typesafe-actions";
import { PayloadAction } from "typesafe-actions/dist";

import actions from "./actions"
import { IOpenChatsState, initOpenChats } from "./models"

const OpenChatsReducer = (state: IOpenChatsState = initOpenChats, action: PayloadAction<string, IOpenChatsState["conversations"]>) => {
  switch (action.type) {
    case getType(actions.postConversation):
      console.log(state)
      console.log(action.payload)
      console.log({
        ...state,
        conversations: action.payload,
      })
      return {
        ...state,
        conversations: action.payload,
      };
    default:
      return state
  }
}

export default OpenChatsReducer;
