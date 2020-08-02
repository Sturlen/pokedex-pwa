/* eslint-disable react/prop-types */
import React from "react"
import "./App.css"
import PokemonAPI from "./api/pokeapico"
import InfiniteScrollList from "./components/InfiniteScrollList"
import { ReactQueryProviderConfig, ReactQueryConfigProvider } from "react-query"

const api = new PokemonAPI()

const query_config: ReactQueryProviderConfig = {
  queries: {
    staleTime: 60 * 60 * 1000, // Do not recheck until 1hr after
    cacheTime: 24 * 60 * 60 * 1000, // Will store data for up to 24hr
    refetchOnWindowFocus: false,
  },
}

/**
 * Injects common css and configs
 */
export const App: React.FC = () => {
  return (
    <div className="App">
      <ReactQueryConfigProvider config={query_config}>
        {
          <InfiniteScrollList
            query={api.fetchPokemonInfoList}
            group_size={15}
          />
        }
      </ReactQueryConfigProvider>
    </div>
  )
}

export default App
