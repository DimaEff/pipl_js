import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useLocation} from "react-router";
import {Container, makeStyles} from "@material-ui/core";


// import styles from "./AppStyles";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {initialize} from "./Redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import AppRouter from "./AppRouter";
import {getLoginRoute} from "./utils/consts";
import Login from "./components/Login/Login";
import mainImg from './assets/images/konfeti.jpg'


const useStyles = makeStyles(theme => ({
    background: {
        position: 'fixed',
        minHeight: '100vh',
        minWidth: '100vw',
        top: '0',
        // На счет картинки еще очень не уверен
        backgroundImage: `url(${mainImg})`,
        backgroundSize: 'cover',
        filter: 'grayscale(90%)',
    },
    wrapper: {
        position: 'relative',
        zIndex: 1,
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
    // Отрисовывать некоторые пути не в styles.Content.
    // Поэтому, login пока тут
    if (pathname === getLoginRoute()) return <Login/>


    return (
        <>
            <div className={styles.background}/>
            <Container maxWidth={"lg"} className={styles.wrapper}>
                <HeaderContainer/>
                <NavbarContainer/>
                <div>
                    <AppRouter/>
                </div>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initialize})(App);