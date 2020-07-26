import React from "react"
import { CardGrid } from "./CardGrid"
import { SimpleCard } from "./SimpleCard"
import { useQuery } from "react-query"
import { PokemonQueryList } from "../interface/queries/PokemonQueryList"

interface FetchedCardGridProps {
  query: PokemonQueryList
  offset?: number
  limit?: number
}

/**
 * Fetch pokemon data from backend and display it with a grid
 */
export function FetchedCardGrid({
  query,
  offset = 0,
  limit = 60,
}: FetchedCardGridProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: "pokemonlist",
    queryFn: async () => {
      return query(offset, limit)
    },
  })

  if (isError) {
    return <p>error</p>
  }

  if (isLoading) {
    return <p>loading</p>
  }

  return (
    <div className={"FetchedGrid"}>
      <CardGrid cardlist={data} card_component={SimpleCard}></CardGrid>
    </div>
  )
}
