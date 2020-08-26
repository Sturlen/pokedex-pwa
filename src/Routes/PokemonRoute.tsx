import React from "react"
import { useRouteMatch, Switch, Route } from "react-router-dom"
import { PokemonListPage } from "../Pages"
import PokemonDetailsRoute from "./PokemonDetailsRoute"

const PokemonRoute = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={PokemonListPage} />
      <Route path={`${path}/:id`} component={PokemonDetailsRoute} />
    </Switch>
  )
}

export default PokemonRoute
