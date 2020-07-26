import { PokemonType } from "./PokemonType"

/**
 * Information displayed uprfront
 */
export interface PokemonInfo {
  pokedex_nr?: number
  name?: string
  default_sprite_src?: string
  types?: string[]
  flavour_text?: string
}
