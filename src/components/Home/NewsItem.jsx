import React from 'react';
import {Typography} from "@material-ui/core";

const NewsItem = ({newsItem}) => {
    return (
        <div style={{border: '1px solid red', borderRadius: '30px'}}>
            <img src={newsItem.url} alt=""/>
            <Typography variant={'h6'}>{newsItem.title}</Typography>
            <Typography variant={'subtitle1'}>{newsItem.text}</Typography>
        </div>
    );
};

export default NewsItem;