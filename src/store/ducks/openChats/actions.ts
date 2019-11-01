import { createStandardAction } from "typesafe-actions";

import { IOpenChatsState } from "./models";
import { OPEN_CHAT } from "./constants";

export const postConversation = createStandardAction(OPEN_CHAT.POST_CONVERSATION)<IOpenChatsState["conversations"]>();

export default {
  postConversation
}
