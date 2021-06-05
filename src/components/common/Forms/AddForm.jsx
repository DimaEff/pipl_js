import React from 'react';
import {Typography} from "@material-ui/core";

import Form from "./Form";
import TextArea from "./FormsComponents/TextArea";

const AddForm = ({addFunction, submitButtonName, formName}) => {
    const handleAdd = async (formData, {reset}) => {
        const {fieldText} = formData;
        if (!fieldText) return

        const newItem = await addFunction(fieldText);
        reset(newItem);
    }

    return (
        <div>
            <Typography variant={'h5'}>{formName}</Typography>
            <Form submitFunction={handleAdd} inputComponent={TextArea} flexFlow={'row nowrap'}>
                {[
                    {name: 'fieldText'}
                ]}
                <button type={'submit'}>{submitButtonName}</button>
            </Form>
        </div>
    );
};

export default AddForm;
