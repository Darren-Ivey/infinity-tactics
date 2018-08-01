import { createAction } from 'redux-actions';
import { take, select } from 'redux-saga/effects';

// actions
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// states
export const UNAUTHENTICATED = 'UNAUTHENTICATED';
export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTHENTICATED = 'AUTHENTICATED';
export const REMOVE_AUTHENTICATION = 'REMOVE_AUTHENTICATION';
export const LOCK_HIDDEN = 'LOCK_HIDDEN';
export const LOCK_DISPLAYED = 'LOCK_DISPLAYED';

// initial state
const INITIAL_STATE = {
    status: UNAUTHENTICATED,
    lockStatus: LOCK_HIDDEN,
    idToken: undefined,
    accessToken: undefined,
    expiresIn: undefined
};

// reducer
export default (state = INITIAL_STATE, action) => {

    const { payload, type } = action;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                status: AUTHENTICATING,
                lockStatus: LOCK_DISPLAYED
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                status: AUTHENTICATED,
                lockStatus: LOCK_HIDDEN,
                idToken: payload.idToken,
                accessToken: payload.accessToken,
                expiresAt: payload.expiresIn
            };

        case LOGOUT:
            return {
                ...state,
                status: REMOVE_AUTHENTICATION,
            };

        default:
            return state;
    }
};

// action creators
export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logout = createAction(LOGOUT);

// selectors
export const getIdToken = (state) => state.authorisation.idToken;
export const getAccessToken = (state) => state.authorisation.accessToken;
export const getAuthExpire = (state) => state.authorisation.expiresIn;


//Sagas
export function* watchLogin() {
    while (yield take(LOGIN_SUCCESS)) {

        const idToken = yield select(getIdToken);
        const accessToken = yield select(getAccessToken);
        const authExpire = yield select(getAuthExpire);

        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('id_token', idToken);
        localStorage.setItem('expires_at', authExpire);
        // this.lock.hide();
    }
}