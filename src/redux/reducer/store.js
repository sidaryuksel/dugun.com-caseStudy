import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from './index';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        thunkMiddleware)
)