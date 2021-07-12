import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {getHomePosts, getTotalCountPosts} from "../../selectors/home_selectors";
import {getPosts} from "../../Redux/home_reducer";
import Home from "./Home";
import useDynamicPagination from "../../hooks/useDynamicPagination";


const HomeContainer = ({posts, getPosts}) => {
    // Пока передаю 100 в качестве теста, т.к. в ответе unsplash нет данных о количестве фотографий
    const {isFetching} = useDynamicPagination(getPosts, 100);

    return <Home posts={posts}/>;
};

const mapStateToProps = (state) => ({
    posts: getHomePosts(state),
})

export default connect(mapStateToProps, {getPosts})(HomeContainer);