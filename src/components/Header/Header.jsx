import React from "react";
import {AppBar, Box, Container, makeStyles, Toolbar, Typography} from "@material-ui/core";

import {getHomeRoute} from "../../utils/consts";
import Link from '../common/Link/Link'
import HeaderMenu from "./HeaderMenu";


const useStyles = makeStyles(theme => ({
    wrapper: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        top: '0',
        left: '0',
        width: '100%',
        textAlign: 'center',
    },
    header: {
        position: 'relative',
        maxWidth: theme.spacing(154),
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        backdropFilter: 'blur(30px)',
    },
    headerBackground: {
        position: 'absolute',
        top: '0',
        height: '35px',
        maxWidth: theme.spacing(154),
        width: '100%',
        background: 'linear-gradient(30deg, #F670C1 40%, #ac6ce1 50%, #855A9E 70%)',
    },
    toolBar: {
        display: 'flex',
        alignItems: 'center',
        width: '96%',
    },
    logo: {
        display: 'flex',
    }
}))

const Header = (props) => {
    const styles = useStyles();

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerBackground}/>
            <AppBar position={'relative'} color={'secondary'} className={styles.header}>
                <Container fixed>
                    <Toolbar className={styles.toolBar}>
                        <Box flexGrow={1} className={styles.logo}>
                            <Link to={getHomeRoute()}>
                                <Typography variant={'h3'}>pipl</Typography>
                            </Link>
                        </Box>
                        <Box className={styles.menu}>
                            <HeaderMenu {...props}/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;