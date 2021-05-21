import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';


const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogin) return <Redirect to={'login'} />;

            return <Component {...this.props}/>;
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLogin: state.auth.isLogin,
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent)
};

export default withAuthRedirect;