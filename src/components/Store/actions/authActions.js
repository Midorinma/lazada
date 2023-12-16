// actions/authActions.js
import {
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_SUCCESS,
    ADD_VALUE,
    DELETE_VALUE,
    DELETE_ALL,
} from './types';

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const logout = () => ({
    type: LOGOUT,
});

export const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload,
});

export const addValue = (payload) => ({
    type: ADD_VALUE,
    payload,
});

export const deleteValue = (payload) => ({
    type: DELETE_VALUE,
    payload,
});

export const deleteAll = (payload) => ({
    type: DELETE_ALL,
});
