import { createAction } from 'redux-actions';

// actions
export const SELECT_ARMY = 'SELECT_ARMY';

// initial state
const INITIAL_STATE = {
    armyListOptions: [
        'Pan Oceania',
        'YuJing',
        'Ariadna',
        'Haqqislam',
        'Nomads',
        'Combined Army',
        'Aleph',
        'Tohaa'
    ],
    selectedArmy: 'PanOceania',
    units: {
        PanOceania: {
            li: ['Auxillia', 'Fusliers', 'Hexas'],
            md: ['Bolts', 'Nisse'],
            hi: ['Orc', 'Aquilla Guard'],
            tag: [],
            rem: [],
            sk: []
        },
        YuJing: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        Ariadna: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        Haqqislam: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        Nomads: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        CombinedArmy: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        Aleph: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        },
        Tohaa: {
            li: [],
            md: [],
            hi: [],
            tag: [],
            rem: [],
            sk: []
        }
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