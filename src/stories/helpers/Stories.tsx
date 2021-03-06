/* eslint-disable react/prop-types */
import React from "react"
import { ReactQueryConfigProvider, ReactQueryProviderConfig } from "react-query"
import { ReactQueryDevtools } from "react-query-devtools"
import "../../unstyle.css"
import "../../App.css"

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
export const Stories: React.FC = ({ children }) => {
  return (
    <>
      <div className="App">
        <ReactQueryConfigProvider config={query_config}>
          {children}
        </ReactQueryConfigProvider>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  )
}
