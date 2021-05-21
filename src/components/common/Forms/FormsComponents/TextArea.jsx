import React, {forwardRef} from 'react';
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1),
    },
    textArea: {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, .6)',
        '&:focus': {
            backgroundColor: 'rgba(255, 255, 255, .9)',
        }
    },
    error: {
        color: 'red',
        fontSize: 'small',
        maxHeight: '0px',
    }
}))

const TextArea = forwardRef((props, ref) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <textarea className={styles.textArea} ref={ref} rows={4} cols={50} {...props}/>
            <Typography className={styles.error} component={'p'}>{props.helperText}</Typography>
        </div>
    );
});

export default TextArea;