import React from 'react';
import {IconButton} from "@material-ui/core";
import {
    FaceRounded,
    ForumRounded,
    GroupRounded,
    MusicNoteRounded,
    SettingsRounded,
    VpnKeyRounded,
    ExitToAppRounded
} from "@material-ui/icons";

import {
    getDialogsRoute,
    getMusicRoute,
    getProfileRoute,
    getSettingsRoute,
    getUsersRoute,
    getLoginRoute
} from "../../utils/consts";
import Link from "../common/Link/Link";


const HeaderMenu = ({isAuth, logOut}) => {

    const menuButtons = [
        {to: getDialogsRoute(), icon: <ForumRounded/>},
        {to: getUsersRoute(), icon: <GroupRounded/>},
        {to: getMusicRoute(), icon: <MusicNoteRounded/>},
        {to: getSettingsRoute(), icon: <SettingsRounded/>},
    ];

    return (
        <div>
            {menuButtons.map(({to, icon}) => (
                <IconButton key={to}>
                    <Link to={to}>{icon}</Link>
                </IconButton>
            ))}
            {isAuth ?
                <>
                    <IconButton>
                        <Link to={getProfileRoute('')}>
                            <FaceRounded fontSize={"large"}/>
                        </Link>
                    </IconButton>
                    <IconButton onClick={logOut}>
                        <ExitToAppRounded fontSize={"large"}/>
                    </IconButton>
                </> :
                <IconButton>
                    <Link to={getLoginRoute()}>
                        <VpnKeyRounded fontSize={"large"}/>
                    </Link>
                </IconButton>
            }
        </div>
    );
}
;

export default HeaderMenu;
