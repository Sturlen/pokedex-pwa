import React from "react"
import "../unstyle.css"
import "../App.css"
import { Pikachu } from "../interface/mock/PokemonCard"
import { SimpleCard } from "../components/SimpleCard"
import { CardGrid } from "../components/CardGrid"
import { PokemonInfo } from "../interface/PokemonInfo"

const incrPokedexNr = (card: PokemonInfo, i: number) => {
  const pokedex_nr = (card.pokedex_nr || 0) + i
  return { ...card, pokedex_nr }
}

export default {
  title: "CardGrid",
  component: CardGrid,
}

export const EmptyGrid = () => (
  <div className="App">
    <CardGrid card_component={SimpleCard} />
  </div>
)

export const SameItemGrid = () => {
  const pattern = Array(32).fill(Pikachu)
  const cardlist = pattern.map(incrPokedexNr)
  return (
    <div className="App">
      <CardGrid cardlist={cardlist} card_component={SimpleCard} />
    </div>
  )
}
