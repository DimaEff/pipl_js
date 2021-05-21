import {authMe} from "./auth_reducer";


const SET_INITIALIZED_SUCCESS = 'app/SET_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const initialize = () => async (dispatch) => {
    let promise = dispatch(authMe());

    await Promise.all([promise])
    dispatch(setInitialSuccess())
}

const setInitialSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export default appReducer;