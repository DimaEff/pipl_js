import React, {forwardRef} from 'react';
import {makeStyles} from "@material-ui/core";
import Input from "./Input";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    input: {
        margin: theme.spacing(1, 0, 1),
        outline: 'none',
        border: 'none',
        borderRadius: '30px',
        width: '80%',
        height: '7vh',
        maxHeight: '60px',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        textAlign: 'center',
        fontSize: 'larger',
        fontWeight: 'bold',
        '&::placeholder': {
            fontSize: 'larger',
        },
        '&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            height: '10vh',
        }

    },
}))

const OvalInput = forwardRef((props, ref) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <input className={styles.input} placeholder={props.label} ref={ref} {...props}/>
        </div>
    );
});


export default OvalInput;
