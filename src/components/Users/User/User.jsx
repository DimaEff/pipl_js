import React from 'react';

import * as styles from './UserStyles'
import Avatar from "../../common/Avatar/Avatar";


const User = (props) => {

    let onToggleFollow = () => {
        props.onToggleFollow(props.id, props.followed)
    }

    const userInProgress = () => {
        return props.followingUsersInProcess.some(userId => userId === props.id)
    }

    return (
        <styles.User>
            <styles.AvatarNameButton>
                <Avatar userId={props.id}
                        src={props.avatar}
                        imgSize={'80px'}
                        name={props.name}
                        circle
                />
                {props.isAuth && <div>
                    <button disabled={userInProgress()} onClick={onToggleFollow}>
                        {props.followed ? 'Unfollow' : 'Follow'}
                    </button>
                </div>}
            </styles.AvatarNameButton>
            <styles.Description>
                <div>
                    {props.status || 'Status'}
                </div>
                <div>
                    {props.location?.city || 'City'}<br/>
                    {props.location?.country || 'Country'}
                </div>
            </styles.Description>
        </styles.User>
    );
};

export default User;