/* eslint-disable react/prop-types */
import React from "react"
import "./App.css"
import PokemonAPI from "./api/pokeapico"
import { ReactQueryProviderConfig, ReactQueryConfigProvider } from "react-query"
import PokemonScrollList from "./components/PokemonScrollList"

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
          <PokemonScrollList
            api={api}
            height={800}
            width={600}
            itemSize={200}
          />
        }
      </ReactQueryConfigProvider>
    </div>
  )
}

export default App
