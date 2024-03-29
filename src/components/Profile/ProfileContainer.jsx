import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useHistory, useParams} from "react-router-dom";

import Profile from "./Profile";
import {addPost, getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profile_reducer";
import {getPosts, getProfile, getUserStatusFromState} from "../../selectors/profile_selector";
import {getIsAuth, getMyInformation} from "../../selectors/auth_selectors";
import {getProfileRoute} from "../../utils/consts";


let ProfileContainer = (props) => {
    const {userId} = useParams();
    const history = useHistory();
    const [isMyProfile, setIsMyProfile] = useState(false);

    useEffect(() => {
        if (!userId) history.push(getProfileRoute(props.myUserId))
    })

    useEffect(() => {
        if (!userId) return
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [userId])

    useEffect(() => {
        userId == props.myUserId ? setIsMyProfile(true): setIsMyProfile(false);
    }, [userId, props.myUserId, setIsMyProfile]);


    return <Profile isMyProfile={isMyProfile} {...props}/>
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    posts: getPosts(state),
    myUserId: getMyInformation(state).userId,
    isLogin: getIsAuth(state),
    initialized: state.app.initialized,
    status: getUserStatusFromState(state),
})

export default connect(mapStateToProps, {addPost, getUserProfile, getUserStatus, updateUserStatus,})(ProfileContainer);