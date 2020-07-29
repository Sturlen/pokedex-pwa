import React from "react"
import { useInfiniteQuery } from "react-query"
import Grid from "./Grid"
import { range } from "lodash"
import InfiniteScroll from "react-infinite-scroll-component"
import FetchedCard from "./FetchedCard"
import PokemonQuery from "../interface/queries/PokemonQuery"

type Props = {
  /**
   * How many pokemon are there in the pokedex?
   */
  max_pokemon?: number

  /** How many items to load at a time */
  group_size: number

  query: PokemonQuery
}

export default function InfiniteScroller({ group_size, query }: Props) {
  const { data, fetchMore, canFetchMore } = useInfiniteQuery<
    number[],
    string,
    number
  >(
    "pokemoninfo" + group_size,
    async (key, offset = 0) => {
      const exclusive_offset = offset + 1
      const id_list = range(exclusive_offset, exclusive_offset + group_size)
      console.log(id_list)
      return id_list
    },
    {
      getFetchMore: (last_offset: number[]): number => {
        return last_offset[last_offset.length - 1]
      },
    }
  )

  const data_length = data?.flat().length || 0
  const flattened_data = data?.flat() || []

  console.log(flattened_data)

  return (
    <InfiniteScroll
      dataLength={data_length}
      next={fetchMore}
      hasMore={canFetchMore || false}
      loader={<h1>Loading </h1>}
    >
      <Grid>
        {flattened_data.map((pokemon_id) => (
          <FetchedCard query={query} id={pokemon_id} key={pokemon_id} />
        ))}
      </Grid>
    </InfiniteScroll>
  )
}
