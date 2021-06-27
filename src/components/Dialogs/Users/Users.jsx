import React from "react";

import styles from "./UsersStyles";
import Avatar from "../../common/Avatar/Avatar";


const Users = ({users}) => {

    const dialogsUsers = users
        .map(user => <Avatar key={user.id}
                             userId={user.id}
                             src={user.avatar}
                             imgSize={'70px'}
                             name={user.username}
                             variant={'subtitle1'}
        />);

    return (
        <styles.Users>
            {dialogsUsers}
        </styles.Users>
    );
};

export default Users;