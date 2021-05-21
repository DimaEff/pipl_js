import styles from "./Message.module";


const Message = (props) => {
    return (
        <styles.Message {...props}>
            {props.message}
        </styles.Message>
    );
};

export default Message;