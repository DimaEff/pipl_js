import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";

import Users from "./Users";
import {getUsers, toggleFollow} from "../../Redux/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getAllUsers,
    getFollowingUsersInProcess,
    getTotalUsersCount
} from "../../selectors/users_selectors";
import {getIsAuth} from "../../selectors/auth_selectors";
import useDynamicPagination from "../../hooks/useDynamicPagination";


const UsersContainer = (props) => {
    const {isFetching} = useDynamicPagination(props.getUsers, props.totalUsersCount);

    const onToggleFollow = (userId, isFollowed) => {
        props.toggleFollow(userId, isFollowed);
    }

    return (
        <>
            <Users {...props}
                   onToggleFollow={onToggleFollow}
            />
            {isFetching && <Preloader />}
        </>
    )
}

let mapStateToProps = (state) => ({
        users: getAllUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        followingUsersInProcess: getFollowingUsersInProcess(state),
        isAuth: getIsAuth(state),
    }
)

export default compose(
    connect(mapStateToProps, {getUsers, toggleFollow}),
)(UsersContainer);