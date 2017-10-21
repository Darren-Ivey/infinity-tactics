import armySelection from './armySelection';
import appStatus, { APP_UNLOADED, appLoaded } from './appStatus';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { call, all, fork, take, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { selectArmy } from './armySelection';
import { getArmyListOptions } from '../services/infinity-services';

function* watchAppLoading() {
    while (yield take(APP_UNLOADED)) {
        const armyList = yield call(getArmyListOptions);
        if (armyList) {
            console.log("Success!")
            yield put(appLoaded());
        } else {
            console.log("Fail!")
        }
    }
}

function* watchArmySelection() {
    while (yield take(LOCATION_CHANGE)) {
        const { payload } = yield take(LOCATION_CHANGE);
        const army =  payload.pathname.replace(/[^0-9a-z]/gi, '');
        yield put(selectArmy(army));
    }
}

export const rootReducer = combineReducers({
    appStatus,
    armySelection,
    router: routerReducer
});

export function* rootSaga () {
    yield all([
        fork(watchArmySelection),
        fork(watchAppLoading)
    ])
}