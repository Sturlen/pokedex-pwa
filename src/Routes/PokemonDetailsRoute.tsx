import React from "react"
import { toSafeInteger } from "lodash"
import { useParams } from "react-router-dom"
import { PokemonDetailsPage } from "../Pages"

const PokemonDetailsRoute = () => {
  const { id } = useParams()
  const pokemonId = toSafeInteger(id)

  return <PokemonDetailsPage pokemonId={pokemonId} />
}

export default PokemonDetailsRoute
