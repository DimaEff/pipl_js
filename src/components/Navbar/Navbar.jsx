import { NavLink } from "react-router-dom";

import styles from './NavbarStyles'
import NavUsers from "./NavUsers/NavUsers";


const Navbar = (props) => {
    return (
        <styles.Navbar className={'nav'}>
            <styles.Item>
                <NavLink to="/profile">Profile</NavLink>
            </styles.Item>
            <styles.Item>
                <NavLink to="/dialogs">Message</NavLink>
            </styles.Item>
            <styles.Item>
                <NavLink to="/users">Users</NavLink>
            </styles.Item>
            <styles.Item>
                <NavLink to="/news">News</NavLink>
            </styles.Item>
            <styles.Item>
                <NavLink to="/music">Music</NavLink>
            </styles.Item>
            <styles.Item>
                <NavLink to="/settings">Settings</NavLink>
            </styles.Item>
            <NavUsers users={props.sidebar.users} />
        </styles.Navbar>
    );
};

export default Navbar;