import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./ducks";

export default function configureStore() {
  return createStore(
    combineReducers(reducers),
    applyMiddleware()
  );
}