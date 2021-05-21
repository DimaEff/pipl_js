import React from 'react';
import {Button, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        alignSelf: 'center',
    },
    button: {
        width: '100px',
        height: '40px',
    }
}))

const PrimaryButton = ({children, ...props}) => {
    const styles = useStyles();

    return (
        <div>
            <Button className={styles.root} type={'submit'} variant={'contained'} color={'primary'} {...props}>
                {children}
            </Button>
        </div>
    );
};

export default PrimaryButton;