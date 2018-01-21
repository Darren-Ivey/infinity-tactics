import armySelection, { fetchArmyDataSaga } from './armySelection';
import appStatus, { APP_UNLOADED, appLoaded } from './appStatus';
import { SELECT_ARMY } from './armySelection'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { call, all, fork, take, takeLatest, put } from 'redux-saga/effects';

function* watchAppLoading() {
    while (yield take(APP_UNLOADED)) {
        // Initial actions before app loads
        yield put(appLoaded());
    }
}

function* watchArmySelection() {
    const { payload } = yield take(SELECT_ARMY);
    yield call(fetchArmyDataSaga, payload);
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