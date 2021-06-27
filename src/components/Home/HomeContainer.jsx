import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getHomeNews} from "../../selectors/home_selectors";
import {getNews} from "../../Redux/home_reducer";
import Home from "./Home";


const HomeContainer = ({news, getNews}) => {
    useEffect(() => {
        getNews(1, 6);
    }, [getNews])

    return <Home news={news}/>;
};

const mapStateToProps = (state) => ({
    news: getHomeNews(state),
})

export default connect(mapStateToProps, {getNews})(HomeContainer);