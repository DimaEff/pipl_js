import React from 'react';

import styles from "./AddPostStyles";
import AddNewTextForm, {TestAddNewTextForm} from "../../../common/Forms/AddNewTextForm";
import {useForm} from "react-hook-form";


const AddPostForm = (props) => {

    let addPost = (data, e) => {
        props.addPost(data.newTextField);
        e.target.reset();
    };

    return (<AddNewTextForm onSubmit={addPost} {...props}/>)

    // const {register, handleSubmit, errors} = useForm({
    //     mode: "onBlur",
    // })
    //
    // return (
    //     <form onSubmit={handleSubmit(addPost)}>
    //         <textarea name={'postField'} ref={register} {...props}/>
    //         <button type={'submit'}>public</button>
    //     </form>
    // )
}

const AddPost = (props) => {

    return (
        <styles.AddPost>
            <div>Add post</div>
            <AddPostForm {...props}/>
        </styles.AddPost>
    );
};

export default AddPost;