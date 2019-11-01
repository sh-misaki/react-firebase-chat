import { connect, MapDispatchToPropsParam } from 'react-redux';

import Top from 'components/pages/Top';
import { IStateAll } from "store/ducks/types";

const mapStateToProps = (_state: IStateAll) => ({
  
})

const mapDispatchToProps = (_dispatch: MapDispatchToPropsParam<any, {}>) => ({
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
