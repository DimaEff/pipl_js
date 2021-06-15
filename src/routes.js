import React from "react";

import {
    getDialogsRoute,
    getProfileRoute,
    getLoginRoute,
    getUsersRoute,
    getMusicRoute, getSettingsRoute, getHomeRoute
} from "./utils/consts";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Home from "./components/Home/Home";
import UsersContainer from "./components/Users/UsersContainer";

// const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));


const appRoutes = [
    {
        path: getLoginRoute(),
        Component: Login,
    },
    {
        path: getHomeRoute(),
        Component: Home,
        exact: true,
    },
    {
        path: getProfileRoute(),
        Component: ProfileContainer,
        withAuth: true,
    },
    {
        path: getDialogsRoute(),
        Component: DialogsContainer,
        withAuth: true,
    },
    {
        path: getUsersRoute(),
        Component: UsersContainer,
        // lazyLoading: true,
    },
    {
        path: getMusicRoute(),
        Component: Music,
        withAuth: true,
        lazyLoading: true,
    },
    {
        path: getSettingsRoute(),
        Component: Settings,
        lazyLoading: true,
    },
];

export default appRoutes;