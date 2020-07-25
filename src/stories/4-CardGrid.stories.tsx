import React from "react"
import "../unstyle.css"
import "../App.css"
import Pikachu from "../interface/mock/PokemonCard"
import { SimpleCard } from "../components/SimpleCard"
import { CardGrid } from "../components/CardGrid"

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
  const cardlist = [Pikachu, Pikachu, Pikachu]
  return (
    <div className="App">
      <CardGrid cardlist={cardlist} card_component={SimpleCard} />
    </div>
  )
}
