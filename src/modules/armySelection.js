import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import { getArmyData } from '../services/infinity-services';

// actions
export const SELECT_ARMY = 'SELECT_ARMY';
export const SELECT_PROFILE = 'SELECT_PROFILE';

export const FETCH_ARMY_DATA = 'FETCH_ARMY_DATA';
export const FETCH_ARMY_DATA_SUCCESS = 'FETCH_ARMY_DATA_SUCCESS';
export const FETCH_ARMY_DATA_FAILED = 'FETCH_ARMY_DATA_FAILED';

// initial state
const INITIAL_STATE = {
    armyListOptions: {},
    selectedArmy: undefined,
    selectedProfile: undefined,
    units: [{
            panoceania: {},
            combinedarmy: {},
            nomads: {}
        }],
    fetching: false,
    error: undefined
};

export default(state = INITIAL_STATE, action) => {

    const { payload, type } = action;

    switch (type) {

        case FETCH_ARMY_DATA:
            return {
                ...state,
                fetching: true,
                error: undefined
            };

        case FETCH_ARMY_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: undefined,
                armyListOptions: payload.arrmyType,
                units: payload.armyProfiles
            };

        case FETCH_ARMY_DATA_FAILED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

        case SELECT_ARMY:
            return {
                ...state,
                selectedArmy: action.payload
            };

        case SELECT_PROFILE:
            return {
                ...state,
                selectedProfile: action.payload
            };

        default:
            return state;
    }
};

// action creators
export const selectArmy = createAction(SELECT_ARMY);
export const selectProfile = createAction(SELECT_PROFILE);

export const fetchArmyData = createAction(FETCH_ARMY_DATA);
export const fetchArmyDataSuccess = createAction(FETCH_ARMY_DATA_SUCCESS);
export const fetchArmyDataFailed = createAction(FETCH_ARMY_DATA_FAILED);

// selectors
export const getArmy = (state) => {
    return state.armySelection.selectedArmy;
};
export const getArmyListOptions = (state) => {
    return state.armySelection.armyListOptions;
};
export const getUnits = (state) => {
    return state.armySelection.units[0];
};
export const getSelectedProfile = (state) => {
    return state.armySelection.selectedProfile;
};

// sagas
export function* fetchArmyDataSaga () {
    yield put(fetchArmyData());
    try {
        const response = yield call(getArmyData);
        yield put(fetchArmyDataSuccess(response));
    } catch (error) {
        yield put(fetchArmyDataFailed(error));
    }
}

