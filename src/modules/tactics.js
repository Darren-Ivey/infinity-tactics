import { createAction } from 'redux-actions';
import { postTactic } from '../services/infinity-services';
import { call, put, takeLatest } from 'redux-saga/effects';

// actions
export const SUBMIT_TACTIC = 'SUBMIT_TACTIC';
export const SUBMIT_TACTIC_SUCCESS = 'SUBMIT_TACTIC_SUCCESS';
export const SUBMIT_TACTIC_FAILED  = 'SUBMIT_TACTIC_FAILED';

// initial state
const INITIAL_STATE = {
    status: 'uninitiated',
    error: undefined,
    profileTactics: undefined
};

export default(state = INITIAL_STATE, action) => {

    const { payload, type } = action;

    switch (type) {

        case SUBMIT_TACTIC:
            return {
                ...state,
                status: 'uninitiated',
                error: undefined,
                profileTactics: payload
            };

        case SUBMIT_TACTIC_SUCCESS:
            return {
                ...state,
                status: 'submitted'
            };

        case SUBMIT_TACTIC_FAILED:
            return {
                ...state,
                status: 'submission failed',
                error: 'error'
            };

        default:
            return state;
    }
};

// action creators
export const submitTactics = createAction(SUBMIT_TACTIC);
export const submitTacticsSuccess = createAction(SUBMIT_TACTIC_SUCCESS);
export const submitTacticsFailed = createAction(SUBMIT_TACTIC_FAILED);

// selectors
export const getTactics = (state) => {
    return state.tactics.profileTactics;
};

// sagas
export function* submitTacticsSaga ({ payload }) {

    try {
        const response = yield call(postTactic, { tactic: payload });

        yield put(submitTacticsSuccess(response));
    } catch (error) {
        yield put(submitTacticsFailed(error));
    }
}


