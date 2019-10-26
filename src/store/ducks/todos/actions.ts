import types, { IFilter } from "./types";

let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter: IFilter ) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = (id: string) => ({
  type: types.TOGGLE_TODO,
  id
});

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};