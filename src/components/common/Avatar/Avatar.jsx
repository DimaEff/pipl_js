import React from 'react';
import {NavLink} from "react-router-dom";

import * as styles from './AvatarStyles'
import userDefaultAvatar from '../../../assets/images/userDefaultAvatar.png'


const Avatar = (props) => {
    return (
        <styles.Avatar imgSize={props.imgSize} circle={props.circle}>
            {props.noLink || <NavLink to={`/profile/${props.userId}`}/>}
            <img src={props.src || userDefaultAvatar} alt=""/>
            <div>
                {props.name}
            </div>
        </styles.Avatar>
    );
};

export default Avatar;