import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./ducks";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = process.env.NODE_ENV !== "production" ?
  composeWithDevTools(applyMiddleware(thunkMiddleware)) :
  applyMiddleware(thunkMiddleware);

export default function configureStore() {
  return createStore(
    combineReducers(reducers),
    middleware
  );
}