import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddSharpIcon from '@material-ui/icons/AddSharp';

import Form from "./FormsComponents/Form";
import TextArea from "./FormsComponents/TextArea";
import TextIconButton from "../Buttons/TextIconButton";
import PrimaryButton from "../Buttons/PrimaryButton";


const schema = yup.object().shape({
    newTextField: yup.string().max(30),
})

const AddNewTextForm = (props) => {
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    return (
        <div>
            <Form onSubmit={handleSubmit(props.onSubmit)}>
                <TextArea name={'newTextField'} ref={register}  error={errors.newTextField}
                          helperText={errors?.newTextField?.message} {...props}/>
                <PrimaryButton>
                    {props.icon || <AddSharpIcon/>}
                </PrimaryButton>
            </Form>
        </div>
    );
};

export const TestAddNewTextForm = (props) => {
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <textarea name={'newTextField'} ref={register} {...props}/>
            <button type={'submit'}>public</button>
        </form>
    );
};

export default AddNewTextForm;
