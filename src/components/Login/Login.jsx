import React from 'react';
import {connect} from "react-redux";
import * as yup from 'yup';
import {Redirect} from "react-router-dom";
import {ButtonGroup, Container, makeStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import {logIn, logOut} from "../../Redux/auth_reducer";
import Form from "../common/Forms/Form";
import piplImg from '../../assets/images/pipl.jpg'
import Buttons from "../common/Buttons/Buttons";
import {getIsAuth} from "../../selectors/auth_selectors";
import OvalInput from "../common/Forms/FormsComponents/OvalInput";


const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(15),
})

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        overflow: 'hidden',
        backgroundSize: 'cover',
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
    },
}))

const LoginForm = (props) => {
    const styles = useStyles();

    const login = async (formData, {setError}) => {
        const response = await props.logIn(formData.email, formData.password);

        setError("password", {
            type: "manual",
            message: response?.[0],
        })
    }

    const registration = () => {
        alert('Registration');
    }

    const testLogin = () => {
        props.logIn('fominienkovd@mail.ru', 'dimon2000fom1');
    }

    return (
        <Container className={styles.form} maxWidth={'xs'}>
            <div className={styles.logo}>pipl</div>
            <Buttons>
                {[
                    {name: 'test login', action: testLogin},
                ]}
            </Buttons>
            <Form schema={schema} submitFunction={login} inputComponent={OvalInput}>
                {[
                    {name: 'email'},
                    {name: 'password', type: 'password'},
                ]}
                <ButtonGroup variant="contained" color="primary">
                    <Buttons>
                        {[
                            {name: 'pipin', type: 'submit'},
                            {name: <AddIcon color={'primary'}/>, action: registration},
                        ]}
                    </Buttons>
                </ButtonGroup>
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