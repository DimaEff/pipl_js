import React from 'react';
import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Redirect} from "react-router-dom";
import {Container, makeStyles, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

import {logIn, logOut} from "../../Redux/auth_reducer";
import Form from "../common/Forms/FormsComponents/Form";
import piplImg from '../../assets/images/pipl.jpg'
import MyLoginInput from "../common/Forms/FormsComponents/MyLoginInput";
import MultipleButton from "../common/Buttons/MultipleButton";
import {getIsAuth} from "../../selectors/auth_selectors";


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

    const {register, handleSubmit, formState: {errors}, setError} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    })

    const login = async (data) => {
        const promise = props.logIn(data.email, data.password);
        const response = await Promise.all([promise]);

        setError("email", {
            type: "manual",
            message: response,
        })
    }

    const registration = () => {
        alert('Registration');
    }

    return (
        <Container className={styles.form} maxWidth={'xs'}>
            <div className={styles.logo}>pipl</div>
            <Form column onSubmit={handleSubmit(login)}>
                <MyLoginInput type={'text'} placeholder={'email'} error={!!errors.email}
                              helperText={errors.email?.message} {...register('email')}/>
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                <MyLoginInput type={'password'} placeholder={'password'}
                              error={!!errors.password} helperText={errors.password?.message} {...register('password')}/>
                <MultipleButton>
                    {[
                        [<Typography variant={'h5'}>pipin</Typography>, login],
                        [<AddIcon fontSize={'default'} color={'primary'}/>, registration],
                    ]}
                </MultipleButton>
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