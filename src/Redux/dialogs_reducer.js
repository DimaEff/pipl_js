const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialProfileState = {
        users: [
            {id: 1, username: 'Dima', avatar: 'https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg'},
            {id: 2, username: 'Alex', avatar: 'https://www.meme-arsenal.com/memes/549e8c6d71ae27a2ebd13a7580d71d80.jpg'},
            {id: 3, username: 'Kate', avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
            {id: 4, username: 'Susan', avatar: 'https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg'},
            {id: 5, username: 'Daniel', avatar: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'},
            {id: 6, username: 'Max', avatar: 'https://pbs.twimg.com/profile_images/435523312404267008/OdfbG_oN_400x400.jpeg'},
        ],
        messages: [
            {id: 1, userId: 1, message: 'Hello!'},
            {id: 2, userId: 1, message: 'Im Dima!'},
            {id: 3, userId: 2, message: 'How are you?'},
            {id: 4, userId: 1, message: 'Im fine, thx'},
            {id: 5, userId: 2, message: 'Good!'},
        ],
    };

let dialogsReducer = (state = initialProfileState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                userId: 1,
                message: action.message,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                messageField: '',
            }

        default:
            return state
    }
};

export const addMessage = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer;