import React from 'react';
import {Switch, Route, Redirect} from "react-router";

import withAuthRedirect from "./hoc/withAuthRedirect";
import {getHomeRoute} from "./utils/consts";

import appRoutes from "./routes";


const AppRouter = () => {

    return (
        <Switch>
            {appRoutes.map(route => {
                if (route.withAuth) {
                    return <Route
                        exact={route.exact}
                        path={route.path}
                        component={withAuthRedirect(route.Component)}/>
                }

                return <Route exact={route.exact} path={route.path} component={route.Component}/>
            })}

            <Redirect to={getHomeRoute()}/>
        </Switch>
    );
};

export default AppRouter;
