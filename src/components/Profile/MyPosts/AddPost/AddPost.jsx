import React from 'react';

import styles from "./AddPostStyles";
import Form from "../../../common/Forms/Form";
import TextArea from "../../../common/Forms/FormsComponents/TextArea";
import {Typography} from "@material-ui/core";


// AddMessage и AddPost очень похожи, но я не знаю, надо ли делать из них один или типо того
// Скорее всего, попозже подумаю и объединю
// Абсолютно точно попозже объединю. Сейчас немного лень(0:50)
const AddPost = ({addPost}) => {

    const handleAddPost = async (formData, {reset}) => {
        const {fieldText} = formData;
        if (!fieldText) return

        const newPost = await addPost(fieldText);
        reset(newPost);
    }

    return (
        <styles.AddPost>
            <Typography variant={'h4'}>Add post</Typography>
            <Form submitFunction={handleAddPost} inputComponent={TextArea} flexFlow={'row nowrap'}>
                {[
                    {name: 'fieldText'}
                ]}
                <button type={'submit'}>post</button>
            </Form>
        </styles.AddPost>
    );
};

export default AddPost;