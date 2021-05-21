import React from "react";
import {NavLink} from "react-router-dom";


import styles from "./HeaderStyles";
import PrimaryButton from "../common/Buttons/PrimaryButton";


const Header = (props) => {
    return (
        <styles.Header>
            <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt=""/>
            <div>
                {props.isAuth ?
                    <>
                        <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink>
                        <PrimaryButton onClick={() => props.logOut()}>Logout</PrimaryButton>
                    </>:
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </styles.Header>
    );
}

export default Header;