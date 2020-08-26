import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { RouteNavigation, NavAction } from "./components/RouteNavigation"
import PokemonIcon from "@material-ui/icons/Favorite"
import MoveIcon from "@material-ui/icons/List"
import TopLevelRoutes from "./Routes"
import RouteRenderer from "./components/RouteRenderer"

const { pokemon, moves } = TopLevelRoutes

const nav_actions: NavAction[] = [
  {
    path: pokemon.path,
    icon: <PokemonIcon />,
    label: "Pokemon",
  },
  {
    path: moves.path,
    icon: <MoveIcon />,
    label: "Moves",
  },
]

const default_route = pokemon

export const App: React.FC = () => {
  return (
    <Router>
      <RouteNavigation actions={nav_actions}>
        <RouteRenderer routes={TopLevelRoutes} defaultRoute={default_route} />
      </RouteNavigation>
    </Router>
  )
}

export default App
