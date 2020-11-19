import { createStore, combineReducers, applyMiddleware } from "redux";
import { Books } from "./books";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { AddBook } from "./forms";
import { createForms } from "react-redux-form";
import { createCookieMiddleware } from "redux-cookie";
import Cookies from "js-cookie";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      books: Books,
      ...createForms({
        addbook: AddBook,
      }),
    }),
    applyMiddleware(thunk, logger, createCookieMiddleware(Cookies))
  );

  return store;
};
