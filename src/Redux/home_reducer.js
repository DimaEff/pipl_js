import {loremIpsum} from "lorem-ipsum";

import {homeAPI} from "../api/api";


const  SET_POSTS = 'home_reducer/SET_POSTS';
// const  SET_CURRENT_PAGE = 'home_reducer/SET_CURRENT_PAGE';

const initialState = {
    posts: [],
    totalCount: null,
    currentPage: 1,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
            };

        // case SET_CURRENT_PAGE:
        //     return {
        //         ...state,
        //         currentPage: action.payload,
        //     }

        default:
            return state;
    }
}

export const getPosts = (page, count) => async (dispatch) => {
    const response = await homeAPI.getPosts(page, count);
    // Пока что так в тестовых целях.
    const author = {name: 'DimaEff'};
    const date = '29 June 2021';
    const posts = response.map(el => ({url: el.urls.regular, text: loremIpsum({count: 4}), author, date}));
    dispatch(setPosts(posts));
    // dispatch(setCurrentPage(page))
}

const setPosts = (payload) => ({type: SET_POSTS, payload});
// const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});
// export const reset = () => ({type: SET_RESET})

export default homeReducer;