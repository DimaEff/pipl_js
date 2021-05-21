import React from 'react';
import {Container, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {

    },
    form: props => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        flexFlow: props.flexFlow,
        padding: theme.spacing(2, 0, 2),
        // border: '3px solid red',
    }),
}));

const Form = ({children, ...props}) => {
    const styles = useStyles({flexFlow: props.column && 'column'});

    return (
            <form noValidate className={styles.form} {...props}>
                {children}
            </form>
    );
};

export default Form;