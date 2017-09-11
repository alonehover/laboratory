import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

import Containers from "./containers"

const routes = [
    {path: "/", exact: true, component: "Home"},
    {path: "/create", component: "Create"},
    {path: "/trip", component: "Trip"}
]

const NoMatch = ({ location }) => (
  <div>
    <h3>404 Not Found <code>{location.pathname}</code></h3>
  </div>
)

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {
                    routes.map((route, k) => (
                        <Route exact={route.exact} path={route.path} key={k} component={Containers[route.component]} />
                    ))
                }
                <Route component={NoMatch}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
