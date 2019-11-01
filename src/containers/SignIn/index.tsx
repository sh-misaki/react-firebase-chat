import { connect, MapDispatchToPropsParam } from 'react-redux';

import Login from 'components/pages/SignIn';
import { IStateAll } from "store/ducks/types";

interface IOwnProps {
  signup?: boolean;
}

const mapStateToProps = (state: IStateAll, ownProps: IOwnProps) => ({
  signup: ownProps.signup != null ? ownProps.signup : false,
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
