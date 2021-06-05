import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./HeaderStyles";
import Buttons from "../common/Buttons/Buttons";


const Header = (props) => {
    return (
        <styles.Header>
            <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt=""/>
            <div>
                {props.isAuth ?
                    <>
                        <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink>
                        <Buttons>{[{name: 'logout', action: props.logOut}]}</Buttons>
                    </>:
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </styles.Header>
    );
}

export default Header;