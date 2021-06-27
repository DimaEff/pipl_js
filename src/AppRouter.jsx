import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import withAuthRedirect from "./hoc/withAuthRedirect";
import withSuspense from "./hoc/withSuspense";


const AppRouter = ({routes, redirectPath = '/', fallbackElement}) => {
    const getRoute = (path, exact, component) => <Route key={path} exact={exact} path={path} component={component}/>;

    return (
        <Switch>
            {routes.map(route => {
                let component = route.Component;

                if (route.lazyLoading) component = withSuspense(component, fallbackElement);
                if (route.withAuth) component = withAuthRedirect(component);

                return getRoute(route.path, route.exact, component);
            })}

            <Redirect to={redirectPath}/>
        </Switch>
    );
};

// Без React.memo все ломается(начинаются цикличные загрузки и запросы к серверу у <Profile/Users>Container)
export default React.memo(AppRouter);