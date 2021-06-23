import React from 'react';

import * as styles from './UsersStyles';
import User from "./User/User";


let Users = (props) => {
    const users = props.users
        .map(user => <User key={user.id}
                           {...user}
                           isAuth={props.isAuth}
                           followingUsersInProcess={props.followingUsersInProcess}
                           onToggleFollow={props.onToggleFollow}
        />);

    return (
        <styles.Users>
            {users}
        </styles.Users>
    );
}

export default Users;