import { connect, MapDispatchToPropsParam } from 'react-redux';

import Login from 'components/pages/SignIn';
import { StateAll } from "store/ducks/types";

interface OwnProps {
  signup?: boolean;
}

const mapStateToProps = (state: StateAll, ownProps: OwnProps) => ({
  signup: ownProps.signup != null ? ownProps.signup : false,
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
