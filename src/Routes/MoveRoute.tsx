import React from "react"
import { useRouteMatch, Switch, Route } from "react-router-dom"
import { MoveListPage } from "../Pages"
import MoveDetailsRoute from "./MoveDetailsRoute"

const MoveRoute = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={MoveListPage} />
      <Route path={`${path}/:id`} component={MoveDetailsRoute} />
    </Switch>
  )
}

export default MoveRoute
