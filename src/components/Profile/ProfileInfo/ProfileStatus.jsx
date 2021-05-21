import React, {useState, useEffect} from 'react';

import * as styles from './ProfileInfoStyles';


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        if (status !== props.status) status = props.status;
    });

    let activateEditMode = () => {
        setEditMode(editMode = true);
    }

    let disableEditMode = (e) => {
        setEditMode(editMode = false);
        props.updateUserStatus(e.target.value);
    }

    let onChangeStatusField = (e) => {
        setStatus(e.target.value);
    }

    return (
        <styles.Status>
            {editMode ?
                <textarea value={status}
                          autoFocus={true}
                          onChange={onChangeStatusField}
                          onBlur={disableEditMode}
                />:
                <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
            }
        </styles.Status>
    );
};

export default ProfileStatus;