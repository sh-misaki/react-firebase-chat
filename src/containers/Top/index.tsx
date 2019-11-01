import { connect, MapDispatchToPropsParam } from 'react-redux';

import Top from 'components/pages/Top';
import { StateAll } from "store/ducks/types";

const mapStateToProps = (_state: StateAll) => ({
  
})

const mapDispatchToProps = (_dispatch: MapDispatchToPropsParam<any, {}>) => ({
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
