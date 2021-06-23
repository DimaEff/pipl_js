import React from 'react';
import {NavLink} from "react-router-dom";

import * as styles from './AvatarStyles'
import userDefaultAvatar from '../../../assets/images/userDefaultAvatar.png'
import {Typography} from "@material-ui/core";


const Avatar = (props) => {
    return (
        <styles.Avatar imgSize={props.imgSize} circle={props.circle}>
            {props.noLink || <NavLink to={`/profile/${props.userId}`}/>}
            <img src={props.src || userDefaultAvatar} alt=""/>
            <Typography variant={props.variant || 'h6'}>
                {props.name}
            </Typography>
        </styles.Avatar>
    );
};

export default Avatar;