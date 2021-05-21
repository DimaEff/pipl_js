export const getProfile = (state) => {
    return state.profilePage.profile
}

export const getPosts = (state) => {
    return state.profilePage.posts
}

export const getUserStatusFromState = (state) => {
    return state.profilePage.userStatus
}