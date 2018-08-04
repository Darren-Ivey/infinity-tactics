import { createAction } from 'redux-actions';
import { postTactic, fetchTactics } from '../services/infinity-services';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getAccessToken } from './authorisation';

// actions
export const SUBMIT_TACTIC = 'SUBMIT_TACTIC';
export const SUBMIT_TACTIC_SUCCESS = 'SUBMIT_TACTIC_SUCCESS';
export const SUBMIT_TACTIC_FAILED  = 'SUBMIT_TACTIC_FAILED';

export const GET_TACTICS = 'GET_TACTICS';
export const GET_TACTICS_SUCCESS = 'GET_TACTICS_SUCCESS';
export const GET_TACTICS_FAILED  = 'GET_TACTICS_FAILED';

// initial state
const INITIAL_STATE = {
    submitStatus: 'uninitiated',
    getStatus: 'uninitiated',
    submitError: undefined,
    getError: undefined,
    profileTactics: undefined
};

export default(state = INITIAL_STATE, action) => {

    const { payload, type } = action;

    switch (type) {

        case SUBMIT_TACTIC:
            return {
                ...state,
                submitStatus: 'uninitiated',
                submitError: undefined
            };

        case SUBMIT_TACTIC_SUCCESS:
            return {
                ...state,
                submitStatus: 'submitted',
                profileTactics: [ payload, ...state.profileTactics ],
            };

        case SUBMIT_TACTIC_FAILED:
            return {
                ...state,
                submitStatus: 'failed',
                submitError: 'error'
            };

        case GET_TACTICS:
            return {
                ...state,
            };

        case GET_TACTICS_SUCCESS:
            return {
                ...state,
                getStatus: 'received',
                profileTactics: payload.result
            };

        case GET_TACTICS_FAILED:
            return {
                ...state,
                submitStatus: 'failed',
                submitError: 'error'
            };

        default:
            return state;
    }
};

// action creators
export const submitTactics = createAction(SUBMIT_TACTIC);
export const submitTacticsSuccess = createAction(SUBMIT_TACTIC_SUCCESS);
export const submitTacticsFailed = createAction(SUBMIT_TACTIC_FAILED);

export const getTactics = createAction(GET_TACTICS);
export const getTacticsSuccess = createAction(GET_TACTICS_SUCCESS);
export const getTacticsFailed = createAction(GET_TACTICS_FAILED);

// selectors
export const profileTactics = (state) => state.tactics.profileTactics;

// sagas
export function* submitTacticsSaga ({ payload }) {
    const accessToken = yield select(getAccessToken);
    try {
        const response = yield call(postTactic, { tactic: payload }, accessToken);
        yield put(submitTacticsSuccess(response));
    } catch (error) {
        console.log(error)
        yield put(submitTacticsFailed(error));
    }
}

export function* getTacticsSaga () {
    try {
        const response = yield call(fetchTactics);
        yield put(getTacticsSuccess(response));
    } catch (error) {
        yield put(getTacticsFailed(error));
    }
}

// watchers
export function* watchTacticsSaga () {
    yield takeLatest(SUBMIT_TACTIC, submitTacticsSaga);
    yield takeLatest(GET_TACTICS, getTacticsSaga);
}
