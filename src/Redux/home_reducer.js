import {homeAPI} from "../api/api";

const  SET_NEWS = 'home_reducer/SET_NEWS';

const initialState = {
    news: [],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.payload],
            };

        default:
            return state;
    }
}

export const getNews = (page, count) => async (dispatch) => {
    const response = await homeAPI.getNews(page, count);
    // Пока что так в тестовых целях.
    const title = 'Test title';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur diam ac justo pulvinar, nec auctor tortor cursus. Quisque tempus ex quis iaculis elementum. Nulla sit amet ipsum auctor tortor feugiat convallis. Fusce sed nunc sed lacus ultricies maximus. Pellentesque non varius orci. Integer a nulla felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet augue lobortis, facilisis lectus at, placerat mi. Proin vulputate tempus lacus et semper. Praesent pellentesque odio accumsan velit maximus vulputate. Nullam aliquet, massa vitae scelerisque rhoncus, sapien tellus vulputate lacus, ac ultrices elit leo sit amet odio';
    const news = response.map(el => ({url: el.urls.regular, title, text}))
    dispatch(setNews(news));
}

const setNews = (payload) => ({type: SET_NEWS, payload});

export default homeReducer;