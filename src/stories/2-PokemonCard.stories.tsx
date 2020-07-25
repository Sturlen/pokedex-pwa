import React from "react"
import PokemonCard from "../components/PokemonCard"
import "../unstyle.css"
import "../App.css"
import Pikachu from "../interface/mock/PokemonCardPikachu"

export default {
  title: "PokemonCard",
  component: PokemonCard,
}

export const emptyCard = () => (
  <div className="App">
    <PokemonCard />
  </div>
)

export const SingleType = () => (
  <div className="App">
    <PokemonCard {...Pikachu} />
  </div>
)
