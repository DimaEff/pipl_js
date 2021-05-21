import React from 'react';

import styles from "./MessagesStyles";
import Message from "./Message/Message";
import AddMessage from "./AddMessage/AddMessage";


const Messages = (props) => {
    let messages = props.messages
        .map(message => message.userId !== 1 ? <Message other key={message.id} message={message.message}/>:
            <Message key={message.id} message={message.message}/>);

    return (
        <styles.Messages>
            { messages }
            <AddMessage addMessage={props.addMessage}/>
        </styles.Messages>
    );
}

export default Messages;