import React from 'react';

import * as styles from './UsersStyles';
import User from "./User/User";


let Users = (props) => {
    let pagesCount = props.totalUsersCount <= 50 ? Math.ceil(props.totalUsersCount / props.pageSize) : 10;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let users = props.users
        .map(user => <User key={user.id}
                           {...user}
                           isAuth={props.isAuth}
                           followingUsersInProcess={props.followingUsersInProcess}
                           onToggleFollow={props.onToggleFollow}
        />);

    return (
        <styles.Users>
            <styles.Pages>
                <div onClick={props.onPreviousUpdateCurrentPage}>{'<'}</div>
                {pages.map((page) => {
                    return (
                        <styles.Page key={page}
                                     onClick={() => props.onUpdateCurrentPage(page)}
                                     currentPage={page === props.currentPage ? '1' : ''}>
                            {page}
                        </styles.Page>
                    )
                })}
                <div onClick={props.onNextUpdateCurrentPage}>{'>'}</div>
            </styles.Pages>
            {users}
        </styles.Users>
    );
}

export default Users;