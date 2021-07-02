import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getHomePosts} from "../../selectors/home_selectors";
import {getPosts} from "../../Redux/home_reducer";
import Home from "./Home";


const HomeContainer = ({posts, getPosts}) => {
    useEffect(() => {
        getPosts(1, 6);
    }, [getPosts])

    return <Home posts={posts}/>;
};

const mapStateToProps = (state) => ({
    posts: getHomePosts(state),
})

export default connect(mapStateToProps, {getPosts})(HomeContainer);