import { PokemonType } from "./PokemonTypes"

/**
 * Information displayed uprfront
 */
export interface PokemonCard {
  pokedex_nr: number
  name: string
  default_sprite_src: string
  types: PokemonType[]
}
