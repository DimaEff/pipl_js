import React from "react";
import * as styles from "./ProfileInfoStyles";

import Avatar from "../../common/Avatar/Avatar";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    return (
        <styles.ProfileInfo>
            <div>
                <Avatar userId={props.profile.userId}
                        src={props.profile.photos.large}
                        imgSize={'300px'}
                        name={props.profile.fullName}
                        noLink
                />
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </styles.ProfileInfo>
    );
};

export default ProfileInfo;