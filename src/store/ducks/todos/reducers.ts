import { combineReducers, Reducer } from "redux";
import CONSTANTS from "./constants";
import types, { IToDo, IFilter } from "./types";
export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

interface IState {
  todos: IToDo[];
  visibilityFilter: IFilter;
}

const todo = (state: IToDo, action: any) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action: { type: any }) => {
  switch (action.type) {
    case types.ADD_TODO:
      return state;
    case types.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default (state = CONSTANTS.SHOW_ALL, action: any) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
