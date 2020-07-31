import React from "react"
import "./App.css"
import PokemonAPI from "./api/pokeapico"
import InfiniteScrollList from "./components/InfiniteScrollList"

const api = new PokemonAPI()

function App() {
  return (
    <div className="App">
      <InfiniteScrollList query={api.fetchPokemonInfoList} group_size={15} />
    </div>
  )
}

export default App
