import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import { getArmyData } from '../services/infinity-services';

// actions
export const SELECT_ARMY = 'SELECT_ARMY';
export const FETCH_ARMY_DATA = 'FETCH_ARMY_DATA';
export const FETCH_ARMY_DATA_SUCCESS = 'FETCH_ARMY_DATA_SUCCESS';
export const FETCH_ARMY_DATA_FAILED = 'FETCH_ARMY_DATA_FAILED';

// initial state
const INITIAL_STATE = {
    armyListOptions: {}
    ,
    selectedArmy: 'panoceania',
    units: {
        panoceania: {
            li: ['Auxillia', 'Fusliers', 'Hexas'],
            md: ['Bolts', 'Nisse'],
            hi: ['Orc', 'Aquilla Guard'],
            tag: [],
            rem: [],
            sk: []
        },
        yujing: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        ariadna: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        haqqislam: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        nomads: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        combinedarmy: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        aleph: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        tohaa: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        }
    },
    fetching: false,
    error: undefined

};

export default(state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_ARMY_DATA:
            return {
                ...state,
                fetching: true,
                error: undefined
            };


        case FETCH_ARMY_DATA_SUCCESS:
            console.log("Payload: ",action.payload)
            return {
                ...state,
                fetching: false,
                error: undefined,
                armyListOptions: action.payload
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
        default:
            return state;
    }
};

// action creators
export const selectArmy = createAction(SELECT_ARMY);
export const fetchArmyData = createAction(FETCH_ARMY_DATA);
export const fetchArmyDataSuccess = createAction(FETCH_ARMY_DATA_SUCCESS);
export const fetchArmyDataFailed = createAction(FETCH_ARMY_DATA_FAILED);


// const formatArmySelection = (armyName) => {
//     return (armyName).replace(/[^0-9a-z]/gi, '');
// }

// selectors
export const getArmy = (state) => {
    return state.armySelection.selectedArmy;
};
export const getArmyListOptions = (state) => {
    return state.armySelection.armyListOptions;
};
export const getUnits = (state) => {
    return state.armySelection.units;
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

