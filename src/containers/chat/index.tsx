import { connect, MapDispatchToPropsParam } from 'react-redux';

import Chat from 'components/pages/Chat';
import { IStateAll } from "store/ducks/types";
import { openChatsSelectors } from "store/ducks/openChats";

const mapStateToProps = (state: IStateAll) => ({
  conversations: openChatsSelectors.getStates(state).conversations,
  title: openChatsSelectors.getStates(state).title,
  members: openChatsSelectors.getStates(state).members,
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
