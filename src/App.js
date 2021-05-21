import React, {useEffect} from 'react';
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

import styles from "./AppStyles";
import HeaderContainer from "./components/Header/HeaderContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {initialize} from "./Redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";


const App = (props) => {

    useEffect(() => {
        props.initialize()
    }, [props.initialize])

    if (!props.initialized) return <Preloader/>

    if (props.location.pathname === '/login') {
        return <Login />
    }

    return (
        <styles.Wrapper className={'app-wrapper'}>

            {/*<Route exact path={'/login'} render={() => <Login/>}/>*/}
            <Route path={'/'} render={() => (
                <>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <styles.Content>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                    </styles.Content>
                </>
            )}/>
        </styles.Wrapper>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize}),
)(App);