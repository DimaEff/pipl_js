import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import appReducer from "./app_reducer";


let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer,
        app: appReducer,
    }
)

let store = createStore(reducers, applyMiddleware(thunk))

export default store