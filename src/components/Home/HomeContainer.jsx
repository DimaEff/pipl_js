import React from 'react';
import {connect} from 'react-redux';

import {getHomeCurrentPage, getHomePosts} from "../../selectors/home_selectors";
import {getPosts} from "../../Redux/home_reducer";
import Home from "./Home";
import useDynamicPagination from "../../hooks/useDynamicPagination";


const HomeContainer = ({posts, currentPage, getPosts}) => {
    // Пока передаю 100 в качестве теста, т.к. в ответе unsplash нет данных о количестве фотографий
    useDynamicPagination(getPosts, 100, currentPage);

    return <Home posts={posts}/>;
};

const mapStateToProps = (state) => ({
    posts: getHomePosts(state),
    currentPage: getHomeCurrentPage(state),
})

export default connect(mapStateToProps, {getPosts})(HomeContainer);