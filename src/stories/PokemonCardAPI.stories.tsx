import React from "react"
import "../unstyle.css"
import "../App.css"
import FetchedCard from "../components/FetchedCard"
import PokemonAPI from "../api/pokeapico"
import NumInput from "./helpers/NumInput"
import SelfFetchedCardGrid from "../components/SelfFetchedGrid"
import InfiniteScroller from "../components/InfiniteScroller"
import { Stories } from "./helpers/Stories"
import InfiniteScrollList from "../components/InfiniteScrollList"
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

export const InfiniteScrolling = () => {
  return (
    <Stories>
      <InfiniteScroller query={api.fetchPokemonInfoById} group_size={15} />
    </Stories>
  )
}

export const InfiniteScrollingList = () => {
  return (
    <Stories>
      <InfiniteScrollList
        query={api.fetchPokemonInfoList}
        group_size={10}
        offset={100}
      />
    </Stories>
  )
}
