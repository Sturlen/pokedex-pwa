import React from "react"
import "../unstyle.css"
import "../App.css"
import Pikachu from "../interface/mock/PokemonCardPikachu"
import { SimpleCard } from "../components/SimpleCard"

export default {
  title: "SimpleCard",
  component: SimpleCard,
}

export const emptyCard = () => (
  <div className="App">
    <SimpleCard />
  </div>
)

export const SingleType = () => (
  <div className="App">
    <SimpleCard {...Pikachu} />
  </div>
)
