import React from 'react';

import styles from "./NavUser.module";
import Avatar from "../../../common/Avatar/Avatar";


const NavUser = (props) => {
    return (
        <styles.NavUser>
            <Avatar userId={2}
                    src={props.avatar}
                    imgSize={'70px'}
                    name={props.username}
                    circle
            />
        </styles.NavUser>
    );
};

export default NavUser;