import React from 'react';
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    link: {
        display: 'flex',
        outline: 'none',
        textDecoration: 'none',
    }
}))

const Link = ({to, ...props}) => {
    const styles = useStyles();

    return <NavLink to={to} className={styles.link} {...props}/>;
};

export default Link;
