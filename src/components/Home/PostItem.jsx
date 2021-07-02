import React, {useState} from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    Typography,
    makeStyles,
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    wrapper: {
        position: 'relative',
        minHeight: theme.spacing(64),
    },
    card: expanded => ({
        position: 'absolute',
        zIndex: expanded && 1,
    }),
}))

const PostItem = ({postItem}) => {
    const [expanded, setExpanded] = useState(false);
    const styles = useStyles(expanded);

    const handleExpandClick = () => {
        setExpanded(e => !e);
    }

    return (
        <div className={styles.wrapper}>
            <Card className={styles.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            D
                        </Avatar>
                    }
                    title={postItem.author.name}
                    subheader={postItem.date}
                />
                <CardMedia
                    style={{height: 0, paddingTop: '56.25%'}}
                    image={postItem.url}
                />
                <CardContent>
                    <Collapse in={expanded} timeout="auto" collapsedHeight={90} className={styles.moreText}>
                        <CardContent>
                            <Typography>
                                {postItem.text}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <IconButton
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default PostItem;