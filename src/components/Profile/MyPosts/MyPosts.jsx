import React from 'react';

import styles from './MyPostsStyles'
import Post from "./Post/Post";
import AddForm from "../../common/Forms/AddForm";
import {Typography} from "@material-ui/core";


const MyPosts = (props) => {

    let posts = props.posts
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);

    console.log('render MyPost')

    return (
        <styles.MyPosts>
            <AddForm addFunction={props.addPost} submitButtonName={'post'} formName={'Add post'}/>
            <Typography variant={'h4'}>My posts</Typography>
            <div>
                { posts }
            </div>
        </styles.MyPosts>
    );
}

// Использую данную оптимизацияю скорее в учебных целях
export default React.memo(MyPosts);