import React from 'react';
import {connect} from "react-redux";
import * as yup from 'yup';
import {Redirect} from "react-router-dom";
import {Container, makeStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import {logIn, logOut} from "../../Redux/auth_reducer";
import Form from "../common/Forms/FormsComponents/Form";
import piplImg from '../../assets/images/pipl.jpg'
import OvalButtons from "../common/Buttons/OvalButtons";
import {getIsAuth} from "../../selectors/auth_selectors";
import OvalInput from "../common/Forms/FormsComponents/OvalInput";


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
})

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        resize: 'both',
        overflow: 'hidden', /* Для интерактивного изменения размера. Необязательно */
        backgroundSize: 'auto 100%',
        backgroundImage: `url(${piplImg})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',

    },
    form: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        minHeight: '40vh',
        minWidth: '45vh',
        borderRadius: '10px',
        boxShadow: '0 0 20px 10px rgba(0,0,0, .9)',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        [theme.breakpoints.down('sm')]: {
            boxShadow: 'none',
            backgroundColor: 'transparent',
            alignSelf: 'flex-start',
            paddingTop: '10vh',
        },
    },
    logo: {
        color: 'rgba(255, 255, 255, .2)',
        filter: 'blur(1.5px)',
        fontSize: '170px',
        fontWeight: '700',
        backgroundClip: 'text',
    },
    icon: {
        padding: theme.spacing(0),
    },
    error: {
        color: 'red',
    }
}))

const LoginForm = (props) => {
    const styles = useStyles();

    const login = async (formData) => {
        const promise = props.logIn(formData.email, formData.password);
        // const response = await Promise.all([promise]);

        // setError("email", {
        //     type: "manual",
        //     message: response,
        // })
    }

    const registration = () => {
        alert('Registration');
    }

    return (
        <Container className={styles.form} maxWidth={'xs'}>
            <div className={styles.logo}>pipl</div>
            <Form schema={schema} onSubmit={login} inputComponent={OvalInput}>
                {[
                    {name: 'email'},
                    {name: 'password', type: 'password'},
                ]}
                <OvalButtons>
                    {[
                    {name: 'pipin', type: 'submit'},
                    {name: <AddIcon fontSize={'default'} color={'primary'}/>, action: registration},
                    ]}
                </OvalButtons>
                {/*<button type={'submit'}>login</button>*/}
            </Form>
        </Container>
    )
};

const Login = (props) => {
    const styles = useStyles();
    // const {isFetching, toggleFetching} = useState(false)

    if (props.isAuth) return <Redirect to={'profile'}/>

    return (
        <div className={styles.root}>
            <LoginForm {...props}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
    }
}

export default connect(mapStateToProps, {logIn, logOut})(Login);