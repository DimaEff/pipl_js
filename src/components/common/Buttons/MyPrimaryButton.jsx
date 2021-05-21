import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {

    },
    button: {
        color: 'grey',
        fontSize: '200%',
        fontWeight: '800',
        borderRadius: '30px',
        outline: 'none',
        border: 'none',
    }
}))

const MyPrimaryButton = ({children, ...props}) => {
    const styles = useStyles();

    return (
        <div {...props}>
            <button className={styles.button} {...props}>
                {children}
            </button>
        </div>
    );
};

export default MyPrimaryButton;
