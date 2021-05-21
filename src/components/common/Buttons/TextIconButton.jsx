import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import AddSharpIcon from '@material-ui/icons/AddSharp';


const useStyles = makeStyles((theme) => ({
    root: {},
    button: {
        maxHeight: '50px',
    }
}))

const TextIconButton = ({children, ...props}) => {
    const styles = useStyles();

    return (
        <Button type={'submit'} className={styles.button}
                variant={'contained'} color={'primary'} {...props}>
            {children}
            {props.icon || <AddSharpIcon/>}
        </Button>
    );
};

export default TextIconButton;
