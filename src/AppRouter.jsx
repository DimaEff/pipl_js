import React, {Suspense} from 'react';
import {Switch, Route, Redirect} from "react-router";

import withAuthRedirect from "./hoc/withAuthRedirect";


const AppRouter = ({routes, redirectPath = '/', fallbackElement = <div>Loading...</div>}) => {

    return (
        <Switch>
            {routes.map(route => {
                if (route.lazyLoading) {
                    return <Route
                        exact={route.exact}
                        path={route.path}
                        render={() => (
                            <Suspense fallback={fallbackElement}>
                                {route.withAuth ?
                                    withAuthRedirect(route.Component):
                                    <route.Component />
                                }
                            </Suspense>
                        )}/>

                } else if (route.withAuth) {
                    return <Route
                        exact={route.exact}
                        path={route.path}
                        component={withAuthRedirect(route.Component)}/>
                }

                return <Route exact={route.exact} path={route.path} component={route.Component}/>
            })}

            <Redirect to={redirectPath}/>
        </Switch>
    );
};

export default AppRouter;
