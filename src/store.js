import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './modules/index.js';

export default(initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(logger));
}