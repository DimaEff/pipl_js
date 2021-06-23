import React, {useState} from 'react';

import * as styles from './ProfileInfoStyles';
import {Typography} from "@material-ui/core";


const ProfileStatus = ({status, isMyProfile, updateUserStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [userStatus, setUserStatus] = useState(status);

    const activateEditMode = () => {
        isMyProfile && setEditMode(true);
    }

    const disableEditMode = (e) => {
        setEditMode(false);
        updateUserStatus(e.target.value);
    }

    const onChangeStatusField = (e) => {
        setUserStatus(e.target.value);
    }

    return (
        <styles.Status>
            {editMode ?
                <textarea value={userStatus}
                          autoFocus={true}
                          onChange={onChangeStatusField}
                          onBlur={disableEditMode}
                />:
                <Typography variant={'subtitle1'} onDoubleClick={activateEditMode}>{status || '-'.repeat(6)}</Typography>
            }
        </styles.Status>
    );
};

export default ProfileStatus;