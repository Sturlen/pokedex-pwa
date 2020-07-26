import React from "react"
import { SimpleCard } from "./SimpleCard"
import { useQuery } from "react-query"
import { PokemonQuery } from "../interface/queries/PokemonQuery"

interface FetchedCardProps {
  query: PokemonQuery
  id?: number
}

/**
 * Fetch pokemon data from backend and display it with a grid
 */
export default function FetchedCard({ query, id = 1 }: FetchedCardProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["pokemonlist", id],
    queryFn: async () => {
      return query(id)
    },
  })

  if (isError) {
    return <p>error</p>
  }

  if (isLoading) {
    return <p>loading</p>
  }
  const src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  return (
    <div className={"FetchedCard"}>
      <SimpleCard {...data} default_sprite_src={src} />
    </div>
  )
}
