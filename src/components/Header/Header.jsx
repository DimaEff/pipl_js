import React from "react";
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";

import Buttons from "../common/Buttons/Buttons";
import {getHomeRoute} from "../../utils/consts";
import Link from '../common/Link/Link'


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
        maxWidth: theme.spacing(154),
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        backdropFilter: 'blur(10px)'
    }
}))

const Header = (props) => {
    const styles = useStyles();

    return (
        <div className={styles.wrapper}>
            <AppBar position={'relative'} color={'secondary'} className={styles.header}>
                <Toolbar>
                    <Link to={getHomeRoute()}>
                        <Typography variant={'h3'}>pipl</Typography>
                    </Link>
                    {/*<Typography variant={'h3'}>*/}
                    {/*    <NavLink to={getHomeRoute()}>*/}
                    {/*        pipl*/}
                    {/*    </NavLink>*/}
                    {/*</Typography>*/}
                    <div>
                        {props.isAuth ?
                            <>
                                <Link to={`/profile/${props.userId}`}>{props.login}</Link>
                                <Buttons>{[{name: 'logout', action: props.logOut}]}</Buttons>
                            </>:
                            <Link to={'/login'}>Login</Link>}
                    </div>
                </Toolbar>
            </AppBar>
        </div>

        // <styles.Header>
        //     <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt=""/>
        //     <div>
        //         {props.isAuth ?
        //             <>
        //                 <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink>
        //                 <Buttons>{[{name: 'logout', action: props.logOut}]}</Buttons>
        //             </>:
        //             <NavLink to={'/login'}>Login</NavLink>}
        //     </div>
        // </styles.Header>
    );
}

export default Header;