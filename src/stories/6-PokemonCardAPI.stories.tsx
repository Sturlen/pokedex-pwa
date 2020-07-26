import React, { useState } from "react"
import "../unstyle.css"
import "../App.css"
import FetchedCard from "../components/FetchedCard"
import makeAPI from "../api/pokeapico"
const api = makeAPI()

export default {
  title: "FetchCard",
  component: FetchedCard,
}

export const emptyCard = () => {
  const [offset, setOffset] = useState(10)
  return (
    <div className="App">
      <input
        type="number"
        onInput={(e) => {
          console.log("offset")
          setOffset(e.currentTarget.valueAsNumber)
        }}
        title="Offset"
        min={1}
        max={200}
        defaultValue={10}
      />
      <FetchedCard query={api.pokemonInfo} id={offset} />
    </div>
  )
}
