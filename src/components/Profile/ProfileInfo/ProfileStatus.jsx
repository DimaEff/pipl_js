import React, {useState} from 'react';

import * as styles from './ProfileInfoStyles';


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
                <span onDoubleClick={activateEditMode}>{status || '-'.repeat(6)}</span>
            }
        </styles.Status>
    );
};

export default ProfileStatus;