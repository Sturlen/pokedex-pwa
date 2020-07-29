/* eslint-disable react/prop-types */
import React from "react"
import { ReactQueryConfigProvider, ReactQueryProviderConfig } from "react-query"
import "../../unstyle.css"
import "../../App.css"

const query_config: ReactQueryProviderConfig = {
  queries: {
    //staleTime: 60 * 60 * 1000, //1hr
    //cacheTime: 60 * 60 * 1000, // 1hr
    refetchOnWindowFocus: false,
    //isDataEqual: () => true, // Content is static
  },
}

/**
 * Injects common css and configs
 */
export const Stories: React.FC = ({ children }) => {
  return (
    <div className="App">
      <ReactQueryConfigProvider config={query_config}>
        {children}
      </ReactQueryConfigProvider>
    </div>
  )
}
