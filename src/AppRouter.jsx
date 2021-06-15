import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import withAuthRedirect from "./hoc/withAuthRedirect";
import withSuspense from "./hoc/withSuspense";


const AppRouter = ({routes, redirectPath = '/', fallbackElement}) => {

    return (
        <Switch>
            {routes.map(route => {
                if (route.lazyLoading) {
                    let LazyComponent = withSuspense(route.Component, fallbackElement);
                    if (route.withAuth) LazyComponent = withAuthRedirect(LazyComponent);

                    return <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={LazyComponent}/>

                } else if (route.withAuth) {
                    return <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={withAuthRedirect(route.Component)}/>
                }

                return <Route key={route.path} exact={route.exact} path={route.path} component={route.Component}/>
            })}

            <Redirect to={redirectPath}/>
        </Switch>
    );
};

export default AppRouter;
