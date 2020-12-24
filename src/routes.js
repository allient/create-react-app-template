import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';

export const CustomRoutes = ({ routes = [] }) => {

    return (
        <Suspense fallback={<h1>Loading Screen...</h1>}>
            <Switch>
                {routes.map((route, index) => {
                    const Layout = route.layout || Fragment;
                    const Component = route.component;
                    return (
                        <Route
                            key={route}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                <Layout>
                                    {route.routes
                                        ? renderRoutes(route.routes)
                                        : <Component {...props} />}
                                </Layout>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    )
};

const routes = [
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('src/views/NotFoundView'))
    },
    {
        exact: true,
        path: '/',
        layout: MainLayout,
        component: lazy(() => import('src/views/BlogView'))
    },
    {
        path: '/home',
        layout: MainLayout,
        routes: [
            {
                exact: true,
                path: '/home/:name/:lastName',
                component: lazy(() => import('src/views/HomeView'))
            },
            {
                component: () => <Redirect to="/404" />
            }
        ]
    }
];

export default routes;


