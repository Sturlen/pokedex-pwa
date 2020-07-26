import { PokemonInfo } from "../PokemonInfo"

/**
 * Fetch a consequtive list of pokeomn
 */
export type PokemonQueryList = (
  /** Start fetching after this. An offset of 20 will return item 21, 22, etc. */
  offset: number,
  /** Max items to fetch. The results array will be less or equal to this. */
  limit: number
) => Promise<PokemonInfo[]>

export default PokemonQueryList
