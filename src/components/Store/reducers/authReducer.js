//import { Crud } from '~/components/Crud';
import {
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_SUCCESS,
    ADD_VALUE,
    // DELETE_VALUE,
    // DELETE_ALL,
} from '../actions/types';

const initialState = {
    user: null,
    isAuthenticated: false,
    productList: [],
};

const authReducer = (state = initialState, action) => {
    let tempObj = {};

    //const userAccount = localStorage.getItem('useState');
    //const cleanData = userAccount.replace(/^"|"$/g, '');
    //const courseApi = `http://localhost:3000/User?q=${cleanData}`; //Lỗi đổi thành  http://localhost:3000/User/1
    console.log(5);
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            tempObj = {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
            break;
        case LOGOUT:
            tempObj = {
                ...state,
                user: null,
                isAuthenticated: false,
            };
            break;
        case ADD_VALUE:
            tempObj = {
                ...state,
                productList: [...state.productList, action.payload],
            };
            break;
        default:
            return state;
    }
    //Crud.Patch(courseApi, tempObj.productList);
    return tempObj;
};

export default authReducer;
