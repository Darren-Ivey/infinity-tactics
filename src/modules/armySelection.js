import { createAction } from 'redux-actions';

// actions
export const SELECT_ARMY = 'SELECT_ARMY';

// initial state
const INITIAL_STATE = {
    armyListOptions: [
        'Pan Oceania',
        'Yu Jing',
        'Ariadna',
        'Haqqislam',
        'Nomads',
        'Combined Army',
        'Aleph',
        'tohaa'
    ],
    selectedArmy: undefined
};

export default(state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SELECT_ARMY:
            console.log(action.payload)
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

export const getState = (state) => {
    return state;
};

export const getArmyListOptions = (state) => {
    return state.armySelection.armyListOptions;
}