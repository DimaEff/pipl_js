import React from 'react';

import styles from './DialogsStyles'
import Users from "./Users/Users";
import Messages from "./Messages/Messages";


const  Dialogs = (props) => {
    return (
        <styles.Dialogs>
            <Users users={props.users}/>
            <Messages messages={props.messages}
                      addMessage={props.addMessage}
            />
        </styles.Dialogs>
    );
};

export default Dialogs;