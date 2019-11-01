import { connect, MapDispatchToPropsParam } from 'react-redux';

import Chat from 'components/pages/Chat';
import { IStateAll } from "store/ducks/types";
import { openChatsSelectors, openChatsOperations } from "store/ducks/openChats";

const mapStateToProps = (state: IStateAll) => ({
  ...openChatsSelectors.getStates(state),
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({
  postConversation: (messgae: string) => {
    dispatch(openChatsOperations.postConversation({
      text: messgae,
      userId: "1",
    }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
