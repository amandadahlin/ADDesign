import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

const persistedState = loadState();

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers,
  persistedState
);

store.subscribe(() => {
  saveState({
    store: store.getState()
  });
}, 1000);

window.store = store;

export default store;
