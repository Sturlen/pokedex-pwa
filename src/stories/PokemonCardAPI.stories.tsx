import React from "react"
import "../unstyle.css"
import "../App.css"
import FetchedCard from "../components/FetchedCard"
import PokemonAPI from "../api/pokeapico"
import NumInput from "./helpers/NumInput"
import SelfFetchedCardGrid from "../components/SelfFetchedGrid"
const api = new PokemonAPI()

export default {
  title: "FetchCard",
  component: FetchedCard,
}

export const fetchOne = () => {
  return (
    <div className="App">
      <NumInput
        title="Offset"
        render={(offset) => (
          <FetchedCard query={api.fetchPokemonInfoById} id={offset} />
        )}
      />
    </div>
  )
}

export const Grid = () => {
  return (
    <div className="App">
      <NumInput
        title="Offset"
        render={(offset) => (
          <SelfFetchedCardGrid
            query={api.fetchPokemonInfoById}
            offset={offset}
          />
        )}
      />
    </div>
  )
}
