import { Dispatch } from "redux";

import { todosSelectors } from ".";
import { StateAll } from "../types";
import actions from "./actions";
import { Todo } from "./models";

let nextTodoId = 0

const addTodo = (text: string) => (dispatch: Dispatch, getState: () => StateAll) => {
  const todos = todosSelectors.getTodos(getState())

  const id = nextTodoId
  nextTodoId += 1

  return dispatch(
    actions.addTodo([
      ...todos,
      {
        id,
        text,
        completed: false,
      },
    ])
  )
}

const toggleTodo = (id: number) => (dispatch: Dispatch, getState: () => StateAll) => {
  const todos = todosSelectors.getTodos(getState())

  const toggledTodos = todos.map((todo: Todo) => {
    if (todo.id !== id) return todo

    return {
      ...todo,
      completed: !todo.completed,
    }
  })

  return dispatch(actions.toggleTodo(toggledTodos))
}

const setVisibilityFilter = (filter: string) => actions.setVisibilityFilter(filter)

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
