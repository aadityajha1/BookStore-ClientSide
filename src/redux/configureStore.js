
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Books } from './books';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            books: Books
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}