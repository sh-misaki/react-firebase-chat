import { Dispatch } from "redux";

import actions from "./actions";
import { IConversation } from "./models";
import openChatsSelectors from "./selectors";
import { IStateAll } from "../types";

const postConversation = (conversation: Pick<IConversation, "text" | "userId">) => (dispatch: Dispatch, getState: () => IStateAll) => {
  const { conversations: currentConversations } = openChatsSelectors.getStates(getState());

  console.log(conversation)
  console.log(currentConversations)

  return dispatch(actions.postConversation([
    ...currentConversations,
    {
      ts: "2020-10-04 23:00",
      userIcon: null,
      userName: "User C",
      ...conversation
    }
  ]));
}

export default {
  postConversation,
}
