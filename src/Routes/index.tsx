import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import PokemonRoute from "./PokemonRoute"
import MoveRoute from "./MoveRoute"

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/pokemon"} component={PokemonRoute} />
      <Route path={"/moves"} component={MoveRoute} />
      {/** /types, /items etc. will go here */}
      <Redirect to={"/pokemon"} />
    </Switch>
  )
}
