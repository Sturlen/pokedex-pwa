import React, { useState } from "react"
import "../unstyle.css"
import "../App.css"
import { SimpleCard } from "../components/SimpleCard"
import { FetchedCardGrid } from "../components/FetchedCardGrid"
import { PokemonQueryMulti } from "../interface/mock/PokemonQuerySimple"
import { action } from "@storybook/addon-actions"

export default {
  title: "Grid/FetchingGrid",
  component: SimpleCard,
}

export const Default = () => (
  <div className="App">
    <FetchedCardGrid query={PokemonQueryMulti} />
  </div>
)

export const OffsetAndLimit = () => {
  const [offset, setOffset] = useState(10)
  const [limit, setLimit] = useState(50)
  return (
    <div className="App">
      <div style={{ border: "white 1px solid", display: "flex" }}>
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
        <input
          type="number"
          onInput={(e) => {
            action("limit")
            setLimit(e.currentTarget.valueAsNumber)
          }}
          title="Limit"
          min={1}
          max={100}
          defaultValue={50}
        />
      </div>
      <FetchedCardGrid
        query={PokemonQueryMulti}
        offset={offset}
        limit={limit}
      />
    </div>
  )
}
