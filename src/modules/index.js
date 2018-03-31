import armySelection, { fetchArmyDataSaga, selectArmy, selectProfile } from './armySelection';
import appStatus, { APP_UNLOADED, appLoaded } from './appStatus';
import { SELECT_ARMY } from './armySelection'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { all, fork, take, put, takeLatest } from 'redux-saga/effects';
import { split, startsWith } from 'lodash/string';


function* checkUrlForProps () {
    while (yield take(APP_UNLOADED)) {

        const getPropFromUrl = (pathname) => {
            const path = split(pathname, '/:', 2);
            return path[1];
        };

        const { pathname } = window.location;
        const path = split(pathname, '/', 2);
        const type = path[1];
        const payload = getPropFromUrl(pathname);

        switch (type) {
            case 'units':
                yield put(selectArmy(payload));
                break;
            case 'profile':
                yield put(selectProfile(payload));
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
    router: routerReducer
});

export function* rootSaga () {
    yield all([
        fork(checkUrlForProps),
        fork(watchArmySelection),
        fork(watchAppLoading)
    ])
}