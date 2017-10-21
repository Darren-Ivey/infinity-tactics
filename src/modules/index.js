import armySelection from './armySelection';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// root reducer
const rootReducer = combineReducers({
    armySelection,
    router: routerReducer
});

export default rootReducer;