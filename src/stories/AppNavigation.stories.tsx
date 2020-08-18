import React from "react"

import AppNavigation from "../components/AppNavigation"
import { Typography } from "@material-ui/core"
import PokemonIcon from "@material-ui/icons/Favorite"
import MovesIcon from "@material-ui/icons/List"

export default {
  title: "Navigation",
  component: AppNavigation,
}

export const NavigationActions = () => (
  <AppNavigation
    tabs={[
      {
        icon: <PokemonIcon />,
        label: "Pokèmon",
        content: <Typography variant="h1">{"Pokemon Page"}</Typography>,
      },
      {
        icon: <MovesIcon />,
        label: "Moves",
        content: <Typography variant="h1">{"Moves Page"}</Typography>,
      },
    ]}
  ></AppNavigation>
)
