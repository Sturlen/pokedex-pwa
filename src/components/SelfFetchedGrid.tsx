import React from "react"
import { range } from "lodash"
import Grid from "./Grid"
import PokemonQuery from "../interface/queries/PokemonQuery"
import FetchedCard from "./FetchedCard"

type Props = {
  /** Query used on each individual card */
  query: PokemonQuery
  offset?: number
  limit?: number
}

/**
 * Fetch pokemon data from backend and display it with a grid
 */
export default function SelfFetchedCardGrid({
  query,
  offset = 0,
  limit = 20,
}: Props) {
  const exclusive_offset = offset + 1
  const cards = range(exclusive_offset, exclusive_offset + limit).map((id) => (
    <FetchedCard query={query} id={id} key={id} />
  ))

  return (
    <div className={"FetchedGrid"}>
      <Grid>{cards}</Grid>
    </div>
  )
}
