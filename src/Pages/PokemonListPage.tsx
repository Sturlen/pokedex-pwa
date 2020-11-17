import React from "react"

import { Grid } from "@material-ui/core"
import PokemonListItem from "../components/PokemonListItem"

export const PokemonListPage: React.FC = () => {
  const ids = Array.from(Array(60), (_, i) => i + 1)

  return (
    <Grid container spacing={1} style={{ margin: "unset" }}>
      {ids.map((id) => (
        <Grid item xs={6} sm={3} md={2} lg={1} key={id}>
          <PokemonListItem id={id}></PokemonListItem>
        </Grid>
      ))}
    </Grid>
  )
}

export default PokemonListPage
