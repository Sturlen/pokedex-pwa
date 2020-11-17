import React from "react"
import { Typography } from "@material-ui/core"

type DetailsPage = {
  pokemonId: number
}

const PokemonDetailsPage: React.FC<DetailsPage> = ({ pokemonId }) => {
  return (
    <Typography>{`Way too much detail on Pokèmon nr. ${pokemonId}`}</Typography>
  )
}

export default PokemonDetailsPage
