import React from 'react';
import SendSharpIcon from '@material-ui/icons/SendSharp';

import styles from "./AddMessageStyles";
import AddNewTextForm from "../../../common/Forms/AddNewTextForm";


const AddMessageForm = (props) => {
    const sendMessage = (data, e) => {
        props.addMessage(data.newTextField);
        e.target.reset();
    }

    return (<AddNewTextForm onSubmit={sendMessage} icon={<SendSharpIcon />} {...props}/>)
};

const AddMessage = (props) => {

    return (
        <styles.AddMessage>
            <div>Add message</div>
            <AddMessageForm {...props}/>
        </styles.AddMessage>
    );
};

export default AddMessage;