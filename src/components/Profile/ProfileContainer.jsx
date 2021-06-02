import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {useParams} from "react-router";

import Profile from "./Profile";
import {addPost, getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile_reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {getPosts, getProfile, getUserStatusFromState} from "../../selectors/profile_selector";
import {getIsAuth, getMyInformation} from "../../selectors/auth_selectors";


let ProfileContainer = (props) => {
    const {userId} = useParams();

    useEffect(() => {
        props.getUserProfile(userId || props.myUserId);
        props.getUserStatus(userId || props.myUserId);
    }, [userId])

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
    connect(mapStateToProps, {
        addPost,
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    })
)(ProfileContainer);