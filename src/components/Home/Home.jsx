import React from 'react';
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import PostItem from "./PostItem";


const useStyles = makeStyles(theme => ({
    newsItem: {
        height: '100px',
        // width: '200px',
    }
}))

const Home = ({posts}) => {
    const postList = posts.map(postItem => <Grid item lg={6} md={6} sm={9} xs={12}>
        <PostItem postItem={postItem}/>
    </Grid>)

    return (
        <Grid justify={"center"} container spacing={2}>
            {postList}
        </Grid>
    );
};

export default Home;
