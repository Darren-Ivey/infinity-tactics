import { createAction } from 'redux-actions';

// actions
export const SELECT_ARMY = 'SELECT_ARMY';

// initial state
const INITIAL_STATE = {
    selectedArmy: ''
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ARMY:
            return {
                ...state,
                selectedArmy: action.item
            };
        default:
            return state;
    }
};

// action creators
export const selectArmy = createAction(SELECT_ARMY);