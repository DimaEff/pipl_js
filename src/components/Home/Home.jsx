import React from 'react';
import {Grid} from "@material-ui/core";
import PostItem from "./PostItem/PostItem";


const Home = ({posts}) => {
    const postList = posts.map(postItem => <Grid item lg={9} md={9} sm={9} xs={12}>
        <PostItem postItem={postItem}/>
    </Grid>)

    return (
        <Grid justify={"center"} container spacing={2}>
            {postList}
        </Grid>
    );
};

export default Home;
