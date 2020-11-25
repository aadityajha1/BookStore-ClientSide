import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Books } from "./books";
import { Auth } from "./auth";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { AddBook } from "./forms";
import { createForms } from "react-redux-form";
import { createCookieMiddleware } from "redux-cookie";
import Cookies from "js-cookie";
// import {} from 'redux-devtools-'
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      books: Books,
      auth: Auth,
      ...createForms({
        addbook: AddBook,
      }),
    }),
    compose(
      applyMiddleware(...[thunk, logger]),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
