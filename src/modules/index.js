import armySelection, { fetchArmyDataSaga } from './armySelection';
import appStatus, { APP_UNLOADED, appLoaded } from './appStatus';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { call, all, fork, take, put } from 'redux-saga/effects';

function* watchAppLoading() {
    while (yield take(APP_UNLOADED)) {

        yield all([
            call(fetchArmyDataSaga)
        ]);

        yield put(appLoaded());
    }
}

export const rootReducer = combineReducers({
    appStatus,
    armySelection,
    router: routerReducer
});

export function* rootSaga () {
    yield all([
        // fork(watchArmySelection),
        fork(watchAppLoading)
    ])
}