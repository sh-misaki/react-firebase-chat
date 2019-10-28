import { connect, MapDispatchToPropsParam } from 'react-redux';
import { Dispatch } from "redux";

import Chat from 'components/pages/chat';
import { StateAll } from "store/ducks/types";
import { todosOperations, todosSelectors } from "store/ducks/todos";

const mapStateToProps = (state: StateAll) => ({
  todos: todosSelectors.getVisibleTodos(state),
  visibilityFilter: todosSelectors.getVisibilityFilter(state),
})

const mapDispatchToProps = (dispatch: MapDispatchToPropsParam<any, {}>) => ({
  onTodoClick: (id: number) => {
    dispatch(todosOperations.toggleTodo(id))
  },
  addTodo: (text: string) => {
    dispatch(todosOperations.addTodo(text))
  },
  onFilterClick: (filter: string) => {
    dispatch(todosOperations.setVisibilityFilter(filter))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
