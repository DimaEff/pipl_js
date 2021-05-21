import styles from "./Users.module";
import User from "./User/User";


const Users = (props) => {

    let users = props.users
        .map(user => <User key={user.id} avatar={user.avatar} username={user.username} id={user.id} />);

    return (
        <styles.Users>
            { users }
        </styles.Users>
    );
};

export default Users;