import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";

import Users from "./Users";
import {getUsers, toggleFollow} from "../../Redux/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getAllUsers,
    // getCurrentPage,
    getFollowingUsersInProcess,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../selectors/users_selectors";
import {getIsAuth} from "../../selectors/auth_selectors";
import useDynamicPagination from "../../hooks/useDynamicPagination";


const UsersContainer = (props) => {
    const {isFetching} = useDynamicPagination(props.getUsers, props.totalUsersCount);

    // useEffect(() => {
    //     props.getUsers(props.currentPage, props.pageSize);
    // }, [props.currentPage, props.pageSize, props.getUsers])

    // const onUpdateCurrentPage = (currentPage) => {
    //     props.getUsers(currentPage, props.pageSize);
    // }
    //
    // const onPreviousUpdateCurrentPage = () => {
    //     const previousCurrentPage = props.currentPage - 1;
    //     if (props.currentPage !== 1) {
    //         props.getUsers(previousCurrentPage, props.pageSize);
    //     }
    // }
    //
    // const onNextUpdateCurrentPage = () => {
    //     const nextCurrentPage = props.currentPage + 1;
    //     const lastPage = props.totalUsersCount > 50 ? 10 : Math.ceil(props.totalUsersCount / props.pageSize);
    //     if (props.currentPage !== lastPage) {
    //         props.getUsers(nextCurrentPage, props.pageSize);
    //     }
    // }

    const onToggleFollow = (userId, isFollowed) => {
        props.toggleFollow(userId, isFollowed);
    }

    return (
        <>
            {props.isFetching ?
                <Preloader/> :
                <Users {...props}
                       onToggleFollow={onToggleFollow}
                       // onUpdateCurrentPage={onUpdateCurrentPage}
                       // onPreviousUpdateCurrentPage={onPreviousUpdateCurrentPage}
                       // onNextUpdateCurrentPage={onNextUpdateCurrentPage}
                />
            }
        </>
    )
}

let mapStateToProps = (state) => ({
        users: getAllUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        // currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingUsersInProcess: getFollowingUsersInProcess(state),
        isAuth: getIsAuth(state),
    }
)

export default compose(
    connect(mapStateToProps, {getUsers, toggleFollow}),
    React.memo,
)(UsersContainer);