import React, {useState, useEffect} from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Dialog,
} from "@material-ui/core";

import PostItemActions from "./PostItemActions";
import PostItemText from "./PostItemText";


const PostItem = ({postItem}) => {
    const [expanded, setExpanded] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Пока что значение 208, чтобы кое-где появлялась возможность "раскрытия" текста
        if (postItem.text.length > 208) setIsLarge(true);
    }, [postItem.text.length, setIsLarge]);

    const handleExpandClick = () => {
        setExpanded(e => !e);
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        D
                    </Avatar>
                }
                title={postItem.author.name}
                subheader={postItem.date}
            />
            <div style={{position: 'relative'}} onClick={() => setOpen(true)}>
                <CardMedia
                    style={{height: 0, paddingTop: '56.25%'}}
                    image={postItem.url}
                />
                <Dialog open={open} style={{height: '100%', width: '100%', position: 'absolute'}}>
                    <img src={postItem.url}/>
                </Dialog>
            </div>
            <CardContent>
                <PostItemText text={postItem.text} expanded={expanded} isLarge={isLarge}/>
            </CardContent>
            <CardActions disableSpacing>
                <PostItemActions expanded={expanded} isLarge={isLarge} handleExpandClick={handleExpandClick}/>
            </CardActions>
        </Card>
    );
}

export default PostItem;