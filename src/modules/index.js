import armySelection from './armySelection';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { takeEvery, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { selectArmy } from './armySelection';

function* watchArmySelection(action) {
    const army = action.payload.pathname.replace(/[^0-9a-z]/gi, '');
    yield put(selectArmy(army));
}

export const rootReducer = combineReducers({
    armySelection,
    router: routerReducer
});

export function* rootSaga() {
    yield takeEvery(LOCATION_CHANGE, watchArmySelection);
}