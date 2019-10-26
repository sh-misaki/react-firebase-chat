const ADD_TODO = "ADD_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
const TOGGLE_TODO = "TOGGLE_TODO";

export default {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO
};

export type IFilter = "SHOW_ALL"
  | "hage";

export interface IToDo {
  id: string;
  text: string;
  completed: boolean;
}
