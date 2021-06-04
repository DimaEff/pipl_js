import React from 'react';

import styles from './MyPostsStyles'
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";


const MyPosts = (props) => {

    let posts = props.posts
        .map(post => <Post key={post.id} message={post.message} likeCount={post.likeCount}/>);

    console.log('render MyPost')

    return (
        <styles.MyPosts>
            <AddPost
                postField={props.postField}
                addPost={props.addPost}
                updatePostField={props.updatePostField}
            />
            My posts
            <div>
                { posts }
            </div>
        </styles.MyPosts>
    );
}

// Использую данную оптимизацияю скорее в учебных целях
export default React.memo(MyPosts);