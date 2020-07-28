import React from "react"
import "../unstyle.css"
import "../App.css"
import FetchedCard from "../components/FetchedCard"
import makeAPI from "../api/pokeapico"
import NumInput from "./helpers/NumInput"
const api = makeAPI()

export default {
  title: "FetchCard",
  component: FetchedCard,
}

export const fetchOne = () => {
  return (
    <div className="App">
      <NumInput
        title="Offset"
        render={(offset) => <FetchedCard query={api.pokemonInfo} id={offset} />}
      />
    </div>
  )
}
