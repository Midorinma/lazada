// actions/authActions.js
import {
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_SUCCESS,
    ADD_VALUE,
    DELETE_VALUE,
    UPDATE_PRODUCTS,
    DELETE_UPDATE,
    TOTAL,
    SAVE_TOTAL,
    ORDER,
    UPDATE_CART,
    PATCH_DATA_REQUEST,
    PATCH_DATA_SUCCESS,
    PATCH_DATA_FAILURE,
    POST_DATA_REQUEST,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
} from './types';

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload,
});

export const logout = () => ({
    type: LOGOUT,
});

export const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload: payload,
});

export const addValue = (payload) => ({
    type: ADD_VALUE,
    payload,
});

export const deleteValue = (payload) => ({
    type: DELETE_VALUE,
    payload: payload,
});

export const updateProduct = (payload) => ({
    type: UPDATE_PRODUCTS,
    payload,
});

export const deleteUpdate = (payload) => ({
    type: DELETE_UPDATE,
    payload,
});

export const totalCoin = (payload) => ({
    type: TOTAL,
    payload,
});

export const totalSave = (payload) => ({
    type: SAVE_TOTAL,
    payload,
});

export const orderReceived = (payload) => ({
    type: ORDER,
    payload: payload,
});

export const updateCart = (payload) => ({
    type: UPDATE_CART,
    payload,
});

export const patchDataRequest = () => ({
    type: PATCH_DATA_REQUEST,
});

export const patchDataSuccess = (data) => ({
    type: PATCH_DATA_SUCCESS,
    payload: data,
});

export const patchDataFailure = (error) => ({
    type: PATCH_DATA_FAILURE,
    payload: error,
});

export const postDataRequest = () => ({
    type: POST_DATA_REQUEST,
});

export const postDataSuccess = ({ payload }) => ({
    type: POST_DATA_SUCCESS,
    payload,
});

export const postDataFailure = (error) => ({
    type: POST_DATA_FAILURE,
    payload: error,
});
