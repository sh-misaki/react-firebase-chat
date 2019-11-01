import { connect, MapDispatchToPropsParam } from 'react-redux';

import { StateAll } from "store/ducks/types";
import { authOperations, authSelectors } from "store/ducks/auth";
import { Domains } from "types";

import Routes from "components/Routes";

const mapStateToProps = (state: StateAll) => ({
  user: authSelectors.getUser(state),
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({
  signin: (user: Domains.User) => {
    dispatch(authOperations.signin(user))
  },
  signout: () => {
    dispatch(authOperations.signout())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);