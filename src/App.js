import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useLocation} from "react-router";

import styles from "./AppStyles";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {initialize} from "./Redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import AppRouter from "./AppRouter";
import {getLoginRoute} from "./utils/consts";
import Login from "./components/Login/Login";


const App = ({initialize, initialized}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        initialize()
    }, [initialize])

    if (!initialized) return <Preloader/>
    // Я пока не придумал нормального варианта внедрить возможность
    // Отрисовывать некоторые пути не в styles.Content.
    // Поэтому, login пока тут
    if (pathname === getLoginRoute()) return <Login />

    return (
        <>
            <styles.Wrapper className={'app-wrapper'}>
                <HeaderContainer/>
                <NavbarContainer/>
                <styles.Content>
                    <AppRouter />
                </styles.Content>
            </styles.Wrapper>
        </>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initialize})(App);