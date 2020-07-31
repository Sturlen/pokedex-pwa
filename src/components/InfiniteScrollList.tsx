import React from "react"
import { useInfiniteQuery } from "react-query"
import Grid from "./Grid"
import InfiniteScroll from "react-infinite-scroll-component"
import PokemonQueryList from "../interface/queries/PokemonQueryList"
import { SimpleCard } from "./SimpleCard"
import { PokemonInfo } from "../interface/PokemonInfo"

type Props = {
  /**
   * How many pokemon are there in the pokedex?
   */
  max_pokemon?: number

  /**
   * Start list from this index
   */
  offset?: number

  /** How many items to load at a time */
  group_size: number

  query: PokemonQueryList
}

export default function InfiniteScrollList({
  group_size,
  offset: initial_offset = 0,
  query,
}: Props) {
  const { data, fetchMore, canFetchMore } = useInfiniteQuery(
    `PokemonList ${JSON.stringify({ initial_offset, group_size })}`,
    async (key, offset = initial_offset) => {
      return await query(offset, group_size)
    },
    {
      getFetchMore: (last_offset: PokemonInfo[]): number => {
        return last_offset[last_offset.length - 1].pokedex_nr || 0
      },
    }
  )

  const data_length = data?.flat().length || 0

  return (
    <InfiniteScroll
      dataLength={data_length}
      next={fetchMore}
      hasMore={canFetchMore || false}
      loader={null}
    >
      {data ? (
        <Grid>
          {data.flat().map((pokemon) => (
            <SimpleCard {...pokemon} key={pokemon.pokedex_nr} />
          ))}
        </Grid>
      ) : null}
      <button
        onClick={() => {
          canFetchMore && fetchMore()
        }}
      >
        {"Load more"}
      </button>
    </InfiniteScroll>
  )
}
