let initialSidebarState = {
    users: [
        {id: 1, username: 'Dima', avatar: 'https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg'},
        {id: 2, username: 'Alex', avatar: 'https://www.meme-arsenal.com/memes/549e8c6d71ae27a2ebd13a7580d71d80.jpg'},
    ],
};

let sidebarReducer = (state=initialSidebarState, action) => {
    return {...state}
};

export default sidebarReducer;