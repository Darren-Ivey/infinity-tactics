import { createAction } from 'redux-actions';

// actions
export const SELECT_ARMY = 'SELECT_ARMY';

// initial state
const INITIAL_STATE = {
    armyListOptions: [
        'PanOceania',
        'YuJing',
        'Ariadna',
        'Haqqislam',
        'Nomads',
        'Combined Army',
        'Aleph',
        'Tohaa'
    ],
    selectedArmy: undefined,
    units: {
        PanOceania: {
            li: ['Auxillia', 'Fusliers', 'Hexas'],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        YuJing: [],
        Ariadna: [],
        Haqqislam: [],
        Nomads: [],
        CombinedArmy: [],
        Aleph: [],
        Tohaa: []
    }
};

export default(state = INITIAL_STATE, action) => {

    switch (action.type) {
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