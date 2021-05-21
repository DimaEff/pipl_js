export const getIsAuth = (state) => {
    return state.auth.isLogin;
}

export const getMyInformation = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
    }
}