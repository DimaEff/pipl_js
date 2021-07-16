import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

import {getIsAuth} from "../selectors/auth_selectors";
import {getLoginRoute} from "../utils/consts";


const withAuthRedirect = (Component) => {

    const RedirectComponent = ({isAuth, match, ...props}) => {
        if (!isAuth) return <Redirect to={getLoginRoute()}/>;

        return <Component {...props}/>;
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: getIsAuth(state),
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent);
};

export default withAuthRedirect;