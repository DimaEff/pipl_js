import {usersAPI} from "../api/api";


const TOGGLE_FOLLOW = 'users/TOGGLE_FOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const UPDATE_CURRENT_PAGE = 'users/UPDATE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_USER = 'users/TOGGLE_IS_FOLLOWING_USER';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingUsersInProcess: [],
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users
                    .map(user => user.id === action.userId ? {...user, followed: !user.followed} : user),
            }

        case  SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }

        case  SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }

        case  UPDATE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
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
    dispatch(toggleIsFetching(true));
    dispatch(updateCurrentPage(currentPage));

    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
}

export const toggleFollow = (userId, isFollowed) => async (dispatch) => {
    dispatch(toggleIsFollowingUser(true, userId));

    const data = await usersAPI.toggleFollowUser(userId, isFollowed);
    if (data.resultCode === 0) dispatch(toggleFollowAC(userId));
    dispatch(toggleIsFollowingUser(false, userId));
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const updateCurrentPage = (currentPage) => ({type: UPDATE_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingUser = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_USER, isFetching, userId});

export default usersReducer;