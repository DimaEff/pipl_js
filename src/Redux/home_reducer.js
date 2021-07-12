import {loremIpsum} from "lorem-ipsum";

import {homeAPI} from "../api/api";


const  SET_POSTS = 'home_reducer/SET_POSTS';

const initialState = {
    posts: [],
    totalCount: null,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
            };

        default:
            return state;
    }
}

export const getPosts = (page, count) => async (dispatch) => {
    const response = await homeAPI.getPosts(page, count);
    // Пока что так в тестовых целях.
    const author = {name: 'DimaEff'};
    const date = '29 June 2021';
    const posts = response.map(el => ({url: el.urls.regular, text: loremIpsum({count: 3}), author, date}));
    dispatch(setPosts(posts));
}

const setPosts = (payload) => ({type: SET_POSTS, payload});

export default homeReducer;