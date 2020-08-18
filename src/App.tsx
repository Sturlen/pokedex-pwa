import React from "react"
import { Typography } from "@material-ui/core"
import PokemonIcon from "@material-ui/icons/Favorite"
import MovesIcon from "@material-ui/icons/List"
import AppNavigation from "./components/AppNavigation"

export const App: React.FC = () => {
  return (
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
}

export default App
