import { PokemonInfo } from "../PokemonInfo"

/**
 * Fetch a single pokemon
 */
export type PokemonQuery = (
  /** National Pokedex nr */
  id: number
) => Promise<PokemonInfo>

export default PokemonQuery
