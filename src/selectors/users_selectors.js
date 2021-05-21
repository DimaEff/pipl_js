export const getAllUsers = (state) => {
    return state.usersPage.users;
}

//М.б. стоит перенести в локальный стейт
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

//М.б. стоит перенести в локальный стейт
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

//М.б. стоит перенести в локальный стейт
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

//М.б. стоит перенести в локальный стейт
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

//М.б. стоит перенести в локальный стейт
export const getFollowingUsersInProcess = (state) => {
    return state.usersPage.followingUsersInProcess;
}

//Не работает т.к. фильтрует пользователей только данной страницы
// export const getFollowedUsers = createSelector(getAllUsers, users => {
//     return users.filter(user => {
//         return user.followed
//     })
// })