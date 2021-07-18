import React from 'react';

import styles from "./MessagesStyles";
import Message from "./Message/Message";
import AddForm from "../../common/Forms/AddForm";


const Messages = (props) => {
    const messages = props.messages
        .map(message => message.userId !== 1 ? <Message other key={message.id} message={message.message}/>:
            <Message key={message.id} message={message.message}/>);

    return (
        <styles.Messages>
            { messages }
            <AddForm addFunction={props.addMessage} submitButtonName={'send'}/>
        </styles.Messages>
    );
}

export default Messages;