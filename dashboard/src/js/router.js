import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

import Containers from "./containers"
import Root from "./containers/root"

const routes = [
    {path: "/", exact: true, component: Containers.Home}
]

const NoMatch = ({ location }) => (
  <div>
    <h3>404 Not Found <code>{location.pathname}</code></h3>
  </div>
)

const Router = () => {
    return (
        <BrowserRouter>
            <Root>
                <Switch>
                    {
                        routes.map((r, k) => (
                            <Route exact={r.exact} path={r.path} key={k} component={r.component} />
                        ))
                    }

                    <Route component={NoMatch}/>
                </Switch>
            </Root>
        </BrowserRouter>
    )
}

export default Router
