import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from "./Profile";
import {addPost, getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile_reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {getPosts, getProfile, getUserStatusFromState} from "../../selectors/profile_selector";
import {getIsAuth, getMyInformation} from "../../selectors/auth_selectors";


let ProfileContainer = (props) => {

    useEffect(() => {
        props.getUserProfile(props.match.params.userId || props.myUserId);
        props.getUserStatus(props.match.params.userId || props.myUserId);
    }, [props.match.params.userId])

    return <Profile {...props}/>
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        posts: getPosts(state),
        myUserId: getMyInformation(state).userId,
        isLogin: getIsAuth(state),
        initialized: state.app.initialized,
        status: getUserStatusFromState(state),
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        addPost,
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    })
)(ProfileContainer);