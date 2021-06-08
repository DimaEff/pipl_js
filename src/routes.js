import {
    getDialogsRoute,
    getProfileRoute,
    getLoginRoute,
    getUsersRoute,
    getNewsRoute,
    getMusicRoute, getSettingsRoute, getHomeRoute
} from "./utils/consts";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Home from "./components/Home/Home";


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
    },
    {
        path: getNewsRoute(),
        Component: News,
    },{
        path: getMusicRoute(),
        Component: Music,
    },{
        path: getSettingsRoute(),
        Component: Settings,
    },
];

export default appRoutes;