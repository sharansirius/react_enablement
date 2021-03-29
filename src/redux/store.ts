import { createStore, applyMiddleware } from "redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
