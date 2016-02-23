import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'


// routes
const routes = {

    path: '/',
    component: require('./components/layout/Base.jsx'),

    indexRoute: {
        component: require('./components/content-pages/Home.jsx')
    },

    childRoutes: [
        {
            path: '/catalog/',
            component: require('./components/catalog/CatalogList.jsx')
        },
        {
            path: '*',
            component: require('./components/layout/ContentPage.jsx')
        },
    ]

}


// init
render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
)
