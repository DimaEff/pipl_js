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
import mainImg from './assets/images/konfeti.jpg'
import appRoutes from "./routes";


const useStyles = makeStyles(theme => ({
    // Пока не знаю, хочу ли какой-то задний фон, но стили пусть будут
    background: {
        position: 'fixed',
        top: '0',
        minHeight: '100vh',
        minWidth: '100vw',
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
    // Отрисовывать некоторые пути без хэдера и т.п.
    // Поэтому, login пока тут
    if (pathname === getLoginRoute()) return <Login/>


    return (
        <>
            {/*<div className={styles.background}/>*/}
            <Container maxWidth={"lg"} className={styles.wrapper}>
                <HeaderContainer/>
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