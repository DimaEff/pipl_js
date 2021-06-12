import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {authMe, logIn, logOut} from "../../Redux/auth_reducer";
import Header from "./Header";
import {getMyInformation, getIsAuth} from "../../selectors/auth_selectors";
import {
    getDialogsRoute,
    getMusicRoute,
    getNewsRoute,
    getProfileRoute,
    getSettingsRoute,
    getUsersRoute
} from "../../utils/consts";


const HeaderContainer = (props) => {
    const navButtonsRoute = [
        getProfileRoute(),
        getDialogsRoute(),
        getUsersRoute(),
        getNewsRoute(),
        getMusicRoute(),
        getSettingsRoute(),
    ];

    return <Header navButtonsRoute={navButtonsRoute} {...props}/>
};

const mapStateToProps = (state) => {
    return {
        userId: getMyInformation(state).userId,
        email: getMyInformation(state).email,
        login: getMyInformation(state).login,
        isAuth: getIsAuth(state),
    }
}

export default compose(
    connect(mapStateToProps, {authMe, logIn, logOut}),
)(HeaderContainer);