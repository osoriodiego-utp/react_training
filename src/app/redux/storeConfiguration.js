import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { listReducer } from "./lists/reducer";
import thunk from "redux-thunk";

const loggerMiddleware = createLogger();

export default () => {
  const middleware = [thunk, loggerMiddleware];
  const enhancers = [];
  // enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());

  return {
    ...createStore(
      combineReducers({ myList: listReducer }),
      compose(applyMiddleware(...middleware), ...enhancers)
    ),
  };
};
