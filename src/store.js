import { createStore } from 'redux';
import rootReducer from './modules/index.js';

export default(initialState) => {
    return createStore(rootReducer, initialState);
}