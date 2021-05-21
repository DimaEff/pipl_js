import styles from "./User.module";
import {Link} from "react-router-dom";

const User = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <styles.User>
            <styles.Avatar src={props.avatar} />
            <Link to={path}>{props.username}</Link>
        </styles.User>
    );
};

export default User;