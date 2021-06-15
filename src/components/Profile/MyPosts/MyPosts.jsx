import React from 'react';

import styles from './MyPostsStyles'
import Post from "./Post/Post";
import AddForm from "../../common/Forms/AddForm";
import {Typography} from "@material-ui/core";


const MyPosts = ({posts, addPost}) => {

    const myPosts = posts
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);

    return (
        <styles.MyPosts>
            <AddForm addFunction={addPost} submitButtonName={'post'} formName={'Add post'}/>
            <Typography variant={'h4'}>My posts</Typography>
            <div>
                {myPosts}
            </div>
        </styles.MyPosts>
    );
}

export default MyPosts;