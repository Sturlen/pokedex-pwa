/* eslint-disable react/prop-types */
import React from "react"
import { useQuery, useInfiniteQuery } from "react-query"

import { PokemonAPI } from "../api/interface/PokemonAPI"
import ScrollList, { makeItemRow } from "./ScrollList"
import { PokemonInfo } from "../interface/PokemonInfo"
import { SimpleCard } from "./SimpleCard"

type Props = {
  api: PokemonAPI
  offset?: number
  group_size?: number
  readonly height: number | string
  width: number | string
  itemSize: number
}

/** Display a scrollable list of Pokemon */
export default function PokemonScrollList({
  api,
  offset: initial_offset = 0,
  group_size = 20,
  ...props
}: Props) {
  const { data: name_list } = useQuery(
    "PokemonNames",
    api.fetchAllPokemonNamesAndIds
  )

  const { data, fetchMore, canFetchMore, isFetchingMore } = useInfiniteQuery(
    `PokemonList ${JSON.stringify({ initial_offset, group_size })}`,
    async (key, offset = initial_offset) => {
      return await api.fetchPokemonInfoList(offset, group_size)
    },
    {
      getFetchMore: (last_offset: PokemonInfo[]): number => {
        return last_offset[last_offset.length - 1].pokedex_nr || 0
      },
      enabled: Boolean(name_list),
    }
  )
  const flattended_data = data ? data.flat() : []

  const loadNextPage = () => {
    fetchMore()
    return null
  }

  const makeRow: makeItemRow = ({ index, style, isItemLoaded }) => {
    let content
    if (!isItemLoaded) {
      content = <SimpleCard pokedex_nr={initial_offset + index + 1} />
    } else {
      content = <SimpleCard {...flattended_data[index]} />
    }

    return <div style={style}>{content}</div>
  }
  return (
    <ScrollList<PokemonInfo>
      hasNextPage={!!canFetchMore}
      isNextPageLoading={!!isFetchingMore}
      loadNextPage={loadNextPage}
      items={flattended_data}
      loading_indicator_rows={group_size}
      {...props}
    >
      {makeRow}
    </ScrollList>
  )
}
