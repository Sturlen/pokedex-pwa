import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { RouteNavigation, NavPage } from "./components/RouteNavigation"
import PokemonIcon from "@material-ui/icons/Favorite"
import MoveIcon from "@material-ui/icons/List"
import * as PageViews from "./Pages"

const paths = {
  pokemonList: "/pokemon",
  pokemonDetails: "/pokemon/:id",
  moveList: "/moves",
  moveDetails: "moves/:id",
}

const pages: NavPage[] = [
  {
    path: paths.pokemonList,
    render: PageViews.PokemonListPage,
    button: {
      icon: <PokemonIcon />,
      label: "Pokemon",
    },
  },
  {
    path: paths.moveList,
    render: PageViews.MoveListPage,
    button: {
      icon: <MoveIcon />,
      label: "Moves",
    },
  },
]

const default_path = paths.pokemonList

export const App: React.FC = () => {
  return (
    <Router>
      <RouteNavigation pages={pages} defaultPath={default_path} />
    </Router>
  )
}

export default App
