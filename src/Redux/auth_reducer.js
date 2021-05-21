import {loginAPI} from "../api/api";


const SET_LOGIN_USER = 'auth/SET_LOGIN_USER';
const LOGOUT = 'auth/LOGOUT';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogin: false,
    profile: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_USER:
            return {
                ...state,
                ...action.payload
            }

        case LOGOUT:
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isLogin: false,
                profile: null,
            }

        default:
            return state
    }
}

export const authMe = () => async (dispatch) => {
    const data = await loginAPI.authMe();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setLoginUser(id, email, login, true));
    } else {
        return data;
    }
}

export const logIn = (email, password) => async (dispatch) => {
    const data = await loginAPI.logIn(email, password);

    if (data.resultCode === 0) {
        dispatch(authMe());
    } else {
        return data.messages;
    }
};

export const logOut = () => async (dispatch) => {
    const data = await loginAPI.logOut();
    if (data.resultCode === 0) {
        dispatch(logout());
    }
}

export const setLoginUser = (userId, email, login, isLogin) => ({
    type: SET_LOGIN_USER,
    payload: {userId, email, login, isLogin}
});
export const logout = () => ({type: LOGOUT});

export default authReducer;