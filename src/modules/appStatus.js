import { createAction } from 'redux-actions';

// actions
export const APP_UNLOADED = 'APP_UNLOADED';
export const APP_LOADED = 'APP_LOADED';

// initial state
const INITIAL_STATE = {
    status: APP_UNLOADED
};

// reducer
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case APP_LOADED:
            return {
                ...state,
                status: APP_LOADED };

        default:
            return state;
    }
};

// action creators
export const appUnloaded = createAction(APP_UNLOADED);
export const appLoaded = createAction(APP_LOADED);

// selectors
export const getAppStatus = (state) => state.appStatus.status;
