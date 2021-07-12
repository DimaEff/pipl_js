import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'b18db872-9d3d-46ff-839b-7a532dff7159',
    },
});

const unsplashInstanse = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        'Authorization': 'Client-ID zkzaYmuSM7jN1qIGO5joAdc-iU2JDHKLJVZlVGv8VSQ',
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize, ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    toggleFollowUser(userId, isFollowed) {
        if (isFollowed) {
            return instance.delete(`follow/${userId}`).then(response => response.data)
        } else {
            return instance.post(`follow/${userId}`).then(response => response.data)
        }
    },
}

export const loginAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    logIn(email, password, rememberMe=true, captcha=false) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data );
    },
    logOut() {
        return instance.delete('auth/login')
            .then(response => response.data);
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateUserStatus(status) {
        return instance.put('profile/status', {status}).then(response => {
            return response.data
        })
    }
}

export const homeAPI = {
    async getPosts(page, count) {
        const response = await unsplashInstanse.get(`photos?page=${page}&per_page=${count}`);
        return response.data;
    }
}