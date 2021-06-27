import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import NewsItem from "./NewsItem";


const useStyles = makeStyles(theme => ({
    newsItem: {
        height: '100px',
        // width: '200px',
    }
}))

const Home = ({news}) => {
    const styles = useStyles();

    const newsList = news.map(newsItem =>  <NewsItem className={styles.newsItem} newsItem={newsItem}/>)

    return (
        <div>
            <Typography variant={'h4'}>
                Внешне пока что более менее оформлена только страница входа
            </Typography>
            <div>
                {newsList}
            </div>
        </div>
    );
};

export default Home;
