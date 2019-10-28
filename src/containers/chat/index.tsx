import { connect } from 'react-redux';

import Chat from 'components/pages/chat';
import { toggleTodo } from 'store/ducks/todos/actions';

const mapStateToProps = (state: any) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (id: string) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
