import React, {useState} from 'react';
import {Card, CardMedia, Dialog, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    dialogImg: {
        maxWidth: '100vw',
        maxHeight: '100vh',
        overflow: 'hidden',
    },
    mainImg: {
        height: 0,
        paddingTop: '56.25%',
        cursor: 'pointer',
    }
}))

const PostItemMedia = ({src}) => {
    const styles = useStyles();

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Dialog open={open}
                    onClose={() => setOpen(false)}
            >
                <img src={src} className={styles.dialogImg}/>
            </Dialog>
            <CardMedia
                onClick={() => setOpen(true)}
                image={src}
                className={styles.mainImg}
            />
        </div>
    );
};

export default PostItemMedia;
