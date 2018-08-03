import { createAction } from 'redux-actions';
import { take, select } from 'redux-saga/effects';

// actions
export const DISPLAY_LOGIN = 'DISPLAY_LOGIN';
export const HIDE_LOGIN = 'HIDE_LOGIN';
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

        case DISPLAY_LOGIN:
            return {
                lockStatus: LOCK_DISPLAYED
            };

        case HIDE_LOGIN:
            return {
                lockStatus: HIDE_LOGIN
            };

        case LOGIN:
            return {
                ...state,
                status: AUTHENTICATING
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                status: AUTHENTICATED,
                lockStatus: LOCK_HIDDEN,
                idToken: payload.idToken,
                accessToken: payload.accessToken,
                expiresIn: payload.expiresIn
            };

        case LOGOUT:
            return {
                ...state,
                status: REMOVE_AUTHENTICATION,
                lockStatus: LOCK_HIDDEN
            };

        default:
            return state;
    }
};

// action creators
export const displayLogin = createAction(DISPLAY_LOGIN);
export const hideLogin = createAction(HIDE_LOGIN)
export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logout = createAction(LOGOUT);

// selectors
export const getLockStatus = (state) => state.authorisation.lockStatus;
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
    }
}

export function* watchLogout() {
    while (yield take(LOGOUT)) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }
}