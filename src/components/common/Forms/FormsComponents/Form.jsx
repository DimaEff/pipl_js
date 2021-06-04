import React from 'react';
import {makeStyles} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import Input from "./Input";


const useStyles = makeStyles((theme) => ({
    form: props => ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        flexFlow: props.flexFlow || 'column',
        padding: theme.spacing(2, 0, 2),
    }),
    fields: {
        width: '100%',
    }
}));

const Form = ({children, onSubmit, ...props}) => {
    const styles = useStyles(props);

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(props.schema),
    });

    const [fields, buttons] = [...children];
    const InputComponent = props.inputComponent || Input;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.fields}>
                {fields.map(({name, label, type, ...props}) => (
                    <InputComponent key={name}
                                    label={label || name}
                                    type={type || 'text'}
                                    error={!!errors[name]}
                                    helperText={errors[name]?.message}
                                    {...register(name)}
                                    {...props}
                    />
                ))}
            </div>
            <div>
                {buttons}
            </div>
        </form>
    );
};


export default Form;