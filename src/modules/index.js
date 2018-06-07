import armySelection, { fetchArmyDataSaga, selectArmy, selectProfile } from './armySelection';
import appStatus, { APP_UNLOADED, appLoaded } from './appStatus';
import { SELECT_ARMY } from './armySelection'
import tactics, { watchTacticsSaga } from './tactics'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { all, fork, take, put, takeLatest } from 'redux-saga/effects';
import { split } from 'lodash/string';


function* checkUrlForProps () {
    while (yield take(APP_UNLOADED)) {

        const { search, pathname } = window.location;
        const payload = split(search, '?=', 2);

        switch (pathname) {
            case '/units':
                yield put(selectArmy(payload[1]));
                break;
            case '/profile':
                yield put(selectProfile(payload[1]));
                break;
        }
    }
}

function* watchAppLoading() {
    while (yield take(APP_UNLOADED)) {
        // Initial actions before app loads
        yield put(appLoaded());
    }
}

function* watchArmySelection() {
    yield takeLatest(SELECT_ARMY, fetchArmyDataSaga);
}

export const rootReducer = combineReducers({
    appStatus,
    armySelection,
    tactics,
    router: routerReducer
});

export function* rootSaga () {
    yield all([
        fork(checkUrlForProps),
        fork(watchArmySelection),
        fork(watchAppLoading),
        fork(watchTacticsSaga)
    ])
}