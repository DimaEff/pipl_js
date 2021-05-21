import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";

import Users from "./Users";
import {getUsers, toggleFollow} from "../../Redux/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingUsersInProcess,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../selectors/users_selectors";
import {getIsAuth} from "../../selectors/auth_selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onUpdateCurrentPage = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    onPreviousUpdateCurrentPage = () => {
        let previousCurrentPage = this.props.currentPage - 1;
        if (this.props.currentPage !== 1) {
            this.props.getUsers(previousCurrentPage, this.props.pageSize);
        }
    }

    onNextUpdateCurrentPage = () => {
        let nextCurrentPage = this.props.currentPage + 1;
        let lastPage = this.props.totalUsersCount > 50 ? 10 : Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        if (this.props.currentPage !== lastPage) {
            this.props.getUsers(nextCurrentPage, this.props.pageSize);
        }
    }

    onToggleFollow = (userId, isFollowed) => {
        this.props.toggleFollow(userId, isFollowed);
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users {...this.props}
                           onToggleFollow={this.onToggleFollow}
                           onUpdateCurrentPage={this.onUpdateCurrentPage}
                           onPreviousUpdateCurrentPage={this.onPreviousUpdateCurrentPage}
                           onNextUpdateCurrentPage={this.onNextUpdateCurrentPage}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingUsersInProcess: getFollowingUsersInProcess(state),
        isAuth: getIsAuth(state),
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, toggleFollow}),
)(UsersContainer)