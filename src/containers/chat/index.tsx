import { Dispatch } from 'react';
import { connect } from 'react-redux';

import Chat from 'components/pages/chat';
import { StateAll } from "store/ducks/types";
import { todosOperations, todosSelectors } from "store/ducks/todos";

const mapStateToProps = (state: StateAll) => ({
  todos: todosSelectors.getVisibleTodos(state),
  visibilityFilter: todosSelectors.getVisibilityFilter(state),
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onTodoClick: todosOperations.toggleTodo,
  addTodo: todosOperations.addTodo,
  onFilterClick: todosOperations.setVisibilityFilter,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
