import {profileAPI} from "../api/api";


const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';


let initialProfileState = {
    posts: [
        {id: 1, message: 'Hello world', likeCount: 12},
        {id: 2, message: '2 post', likeCount: 1},
    ],
    profile: null,
    userStatus: '',
};

let profileReducer = (state = initialProfileState, action) => {
    window.profileState = state
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: action.newPostMessage,
                likeCount: 0,
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status,
            }

        default:
            return state
    }
};

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const status = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(status));
}

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const addPost = (newPostMessage) => (dispatch) => {
    dispatch(setPost(newPostMessage));
}

export const setPost = (newPostMessage) => ({type: ADD_POST, newPostMessage});
export const setUserProfile = (profile, status) => ({type: SET_USER_PROFILE, profile, status});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export default profileReducer;
