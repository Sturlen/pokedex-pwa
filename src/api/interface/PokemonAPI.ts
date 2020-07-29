import PokemonQuery from "../../interface/queries/PokemonQuery"
import PokemonQueryList from "../../interface/queries/PokemonQueryList"

/**
 * An API for retriving data from the Pokemon games.
 */
export interface PokemonAPI {
  fetchPokemonInfoById: PokemonQuery
  fetchPokemonInfoList: PokemonQueryList

  /** Get how many pokemon are in the dex */
  fetchPokemonInPokedex: () => Promise<number>
}
