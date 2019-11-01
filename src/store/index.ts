import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./ducks";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = process.env.NODE_ENV !== "production" ?
  composeWithDevTools(applyMiddleware(thunkMiddleware)) :
  applyMiddleware(thunkMiddleware);

const store = createStore(
  combineReducers(reducers),
  middleware
);

export default store;
