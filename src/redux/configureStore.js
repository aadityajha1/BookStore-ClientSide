
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Books } from './books';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AddBook } from './forms';
import { createForms } from 'react-redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            books: Books,
            ...createForms({
                addbook: AddBook
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}