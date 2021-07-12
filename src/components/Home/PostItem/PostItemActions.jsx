import React from 'react';
import {Box, IconButton} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const PostItemActions = ({expanded, isLarge, handleExpandClick}) => {
    return (
        <>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon/>
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
            {(isLarge && !expanded) &&
            <Box marginLeft={'auto'}>
                <IconButton onClick={handleExpandClick}
                            aria-expanded={expanded}
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </Box>}
        </>
    );
};

export default PostItemActions;
