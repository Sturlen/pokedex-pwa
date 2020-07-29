import PokemonQuery from "../../interface/queries/PokemonQuery"

/**
 * An API for retriving data from the Pokemon games.
 */
export interface PokemonAPI {
  fetchPokemonInfoById: PokemonQuery
}
