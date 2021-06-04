import React from 'react';
import SendSharpIcon from '@material-ui/icons/SendSharp';

import styles from "./AddMessageStyles";
import Form from "../../../common/Forms/Form";
import TextArea from "../../../common/Forms/FormsComponents/TextArea";


// AddMessage и AddPost очень похожи, но я не знаю, надо ли делать из них один или типо того
// Скорее всего, попозже подумаю и объединю
// Абсолютно точно попозже объединю. Сейчас немного лень(0:50)
const AddMessage = ({addMessage}) => {

    const sendMessage = async (formData, {reset}) => {
        const {fieldText} = formData;
        if (!fieldText) return

        const newPost = await addMessage(fieldText);
        reset(newPost);
    }

    return (
        <styles.AddMessage>
            <div>Add message</div>
            <Form submitFunction={sendMessage} inputComponent={TextArea} flexFlow={'row nowrap'}>
                {[
                    {name: 'fieldText'}
                ]}
                <button type={'submit'}>send</button>
            </Form>
        </styles.AddMessage>
    );
};

export default AddMessage;