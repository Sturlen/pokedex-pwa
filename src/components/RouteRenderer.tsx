import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { AppRoute, AppRoutes } from "../Routes"

export type RRProps = {
  routes: AppRoutes
  defaultRoute: AppRoute
}

const RouteRenderer: React.FC<RRProps> = ({ routes, defaultRoute }) => {
  const route_keys = Object.keys(routes)
  return (
    <Switch>
      {route_keys.map((key) => {
        const { path, component } = routes[key]
        return <Route path={path} key={key} component={component} />
      })}
      <Redirect to={defaultRoute.path} />
    </Switch>
  )
}

export default RouteRenderer
