import PokemonQuery from "../../interface/queries/PokemonQuery"
import PokemonQueryList from "../../interface/queries/PokemonQueryList"
import { PokemonInfo } from "../../interface/PokemonInfo"

/**
 * An API for retriving data from the Pokemon games.
 */
export interface PokemonAPI {
  fetchPokemonInfoById: PokemonQuery
  fetchPokemonInfoList: PokemonQueryList

  /** Get how many pokemon are in the dex */
  fetchPokemonInPokedex: () => Promise<number>

  /** Get how many pokemon are in the dex */
  fetchAllPokemonNamesAndIds: () => Promise<PokemonInfo[]>
}
