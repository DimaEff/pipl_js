import React from 'react';

import styles from "./NavUsers.module";
import NavUser from "./NavUser/NavUser";


const NavUsers = (props) => {

    let users = props.users
        .map(user => <NavUser key={user.id} avatar={user.avatar} username={user.username} />)

    return (
        <styles.NavFriends>
            { users }
        </styles.NavFriends>
    );
};

export default NavUsers;