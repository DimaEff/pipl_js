import React from 'react';
import {forwardRef} from "react/cjs/react.production.min";
import {makeStyles, TextField} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1)
    }
}))

const Input = forwardRef((props, ref) => {

    return <TextField
        fullWidth
        color={'primary'}
        variant={'filled'}
        margin={'normal'}
        inputRef={ref}
        {...props}
    />
});



export default Input;