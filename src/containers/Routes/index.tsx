import { connect, MapDispatchToPropsParam } from 'react-redux';

import { IStateAll } from "store/ducks/types";
import { authOperations, authSelectors } from "store/ducks/auth";
import { Domains } from "types";

import Routes from "components/Routes";

const mapStateToProps = (state: IStateAll) => ({
  user: authSelectors.getUser(state),
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({
  signin: (user: Domains.IUser) => {
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