import React from "react";

import styles from "./UsersStyles";
import User from "./User/User";


const Users = ({users}) => {

    const dialogsUsers = users
        .map(user => <User key={user.id} avatar={user.avatar} username={user.username} id={user.id} />);

    return (
        <styles.Users>
            {dialogsUsers}
        </styles.Users>
    );
};

export default Users;