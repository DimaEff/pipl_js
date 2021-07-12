import React from 'react';
import {Box, CardContent, Collapse, Typography} from "@material-ui/core";


const PostItemText = ({text, expanded, isLarge}) => {
    return (
        <>
            {
                isLarge ?
                    <>
                        <Collapse in={expanded} timeout="auto" collapsedHeight={100}>
                            <CardContent>
                                <Typography variant={'subtitle1'}>
                                    {text}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </> :
                    <Box padding={'16px'}>
                        <Typography variant={'subtitle1'}>
                            {text}
                        </Typography>
                    </Box>
            }
        </>
    );
};

export default PostItemText;
