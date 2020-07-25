import React from "react"
import PokemonCard from "../components/PokemonCard"
import "../unstyle.css"
import "../App.css"

export default {
  title: "PokemonCard",
  component: PokemonCard,
}

export const SingleType = () => <PokemonCard name={"pikachu"} pokedex_nr={0} />
