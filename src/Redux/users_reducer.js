import {usersAPI} from "../api/api";


const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FOLLOWING_USER = 'users/TOGGLE_IS_FOLLOWING_USER';

const initialState = {
    users: [],
    totalUsersCount: 0,
    followingUsersInProcess: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }

        case  SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }

        case TOGGLE_IS_FOLLOWING_USER:
            return {
                ...state,
                followingUsersInProcess: action.isFetching ?
                    [...state.followingUsersInProcess, action.userId] :
                    state.followingUsersInProcess.filter(id => id !== action.userId),
            }

        default:
            return state;
    }
}

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    const data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const toggleFollow = (userId, isFollowed) => async (dispatch) => {
    dispatch(toggleIsFollowingUser(true, userId));

    await usersAPI.toggleFollowUser(userId, isFollowed);
    dispatch(toggleIsFollowingUser(false, userId));
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFollowingUser = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_USER, isFetching, userId});

export default usersReducer;