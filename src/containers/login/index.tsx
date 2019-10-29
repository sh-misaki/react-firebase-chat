import { connect, MapDispatchToPropsParam } from 'react-redux';

import Login from 'components/pages/login';
import { StateAll } from "store/ducks/types";

const mapStateToProps = (state: StateAll) => ({
  
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
