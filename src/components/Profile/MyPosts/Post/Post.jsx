import styles from "./PostStyles";


const Post = (props) => {
    return(
        <styles.Post>
            <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt=""/>
            {props.message}
            <span>Like: {props.likeCount}</span>
        </styles.Post>
    );
}

export default Post;