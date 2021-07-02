import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";
import {Container, makeStyles} from "@material-ui/core";


import HeaderContainer from "./components/Header/HeaderContainer";
import {initialize} from "./Redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import AppRouter from "./AppRouter";
import {getLoginRoute} from "./utils/consts";
import Login from "./components/Login/Login";
import appRoutes from "./routes";


const useStyles = makeStyles(theme => ({
    background: {
        position: 'fixed',
        top: '0',
        minHeight: '100vh',
        minWidth: '100vw',

        backgroundColor: '#f2f2f2',
    },
    wrapper: {
        position: 'relative',
        marginTop: theme.spacing(9),
    }
}))

const App = ({initialize, initialized}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        initialize()
    }, [initialize])

    const styles = useStyles();

    if (!initialized) return <Preloader/>
    // Я пока не придумал нормального варианта внедрить возможность
    // Отрисовывать некоторые пути без хэдера и т.п.
    // Поэтому, login пока тут
    if (pathname === getLoginRoute()) return <Login/>


    return (
        <>
            <div className={styles.background}/>
            <HeaderContainer/>
            <Container maxWidth={"md"} className={styles.wrapper}>
                <div>
                    <AppRouter routes={appRoutes}/>
                </div>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initialize})(App);