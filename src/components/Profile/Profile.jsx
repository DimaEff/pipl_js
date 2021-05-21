import React from "react";

import styles from './ProfileStyles'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {

    if (!props.profile) return <Preloader />

    return (
        <styles.Profile>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPosts posts={props.posts}
                     postField={props.postField}
                     addPost={props.addPost}
                     updatePostField={props.updatePostField}
            />
        </styles.Profile>
    );
}

export default Profile;