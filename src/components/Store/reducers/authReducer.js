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
    STORAGE_KEY,
    UPDATE_CART,
    PATCH_DATA_REQUEST,
    PATCH_DATA_SUCCESS,
    PATCH_DATA_FAILURE,
    POST_DATA_REQUEST,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
} from '../actions/types';
import storage from './storage';

const initialState = storage.get(STORAGE_KEY) ?? {
    user: null,
    isAuthenticated: false,
    error: null,
    loading: false,
    productList: [],
    shipping: [],
    order: [],
    total: [],
    saveTotal: [],
};

const authReducer = (state = initialState, action) => {
    var temp = {};

    switch (action.type) {
        case LOGIN_SUCCESS: {
            temp = {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
            break;
        }
        case REGISTER_SUCCESS: {
            temp = {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                productList: [],
                shipping: [],
                order: [],
                total: [],
                saveTotal: [],
            };
            break;
        }
        case LOGOUT: {
            temp = {
                ...state,
                user: null,
                isAuthenticated: false,
            };

            break;
        }
        case ADD_VALUE: {
            temp = {
                ...state,
                productList: [...state.productList, action.payload],
            };

            break;
        }
        case UPDATE_CART: {
            const updatedItems = state.productList.filter(
                (i) => action.payload !== i.order,
            );
            temp = {
                ...state,
                productList: updatedItems,
            };
            break;
        }
        case UPDATE_PRODUCTS: {
            const updatedItems = state.productList.filter((i, n) =>
                action.payload.includes(n),
            );
            temp = {
                ...state,
                shipping: updatedItems,
            };
            break;
        }
        case DELETE_UPDATE: {
            const updatedItems = state.shipping.filter(
                (i, n) => action.payload !== n,
            );
            temp = {
                ...state,
                shipping: updatedItems,
            };
            break;
        }
        case TOTAL: {
            temp = {
                ...state,
                total: [action.payload],
            };

            break;
        }
        case SAVE_TOTAL: {
            temp = {
                ...state,
                saveTotal: [...state.saveTotal, action.payload],
            };
            break;
        }
        case ORDER: {
            temp = {
                ...state,
                order: [...state.order, action.payload],
            };
            break;
        }
        case DELETE_VALUE: {
            const updatedItems = state.productList.filter(
                (i, n) => !action.payload.includes(n),
            );
            temp = {
                ...state,
                productList: updatedItems,
            };
            break;
        }
        case PATCH_DATA_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case PATCH_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
            // console.log('patch data success: ', action.payload);
        }
        case PATCH_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case POST_DATA_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case POST_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
            // console.log('patch data success: ', action.payload);
        }
        case POST_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default:
            return state;
    }

    storage.set(STORAGE_KEY, temp);

    return temp;
};

export default authReducer;
