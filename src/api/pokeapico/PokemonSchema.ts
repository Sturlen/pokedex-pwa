import * as z from "zod"
import { NamedResource } from "./NamedResource"
import { PokemonInfo } from "../../interface/PokemonInfo"
import Immutable from "../../interface/Immutable"

export const PokemonTypeSchema = z.object({
  /** The order the Pokémon's types are listed in. */
  slot: z.number().int().nonnegative(),
  type: NamedResource,
})

export const PokemonSchema = z.object({
  id: z.number().int(),
  name: z.string().nonempty(),
  types: PokemonTypeSchema.array(),
})

export type Pokemon = Immutable<z.infer<typeof PokemonSchema>>

export function pokemonToPokemonInfo(pkmn: Pokemon): PokemonInfo {
  const sorted_types = Array.from(pkmn.types)
    .sort((a, b) => a.slot - b.slot)
    .map((type_res) => type_res.type.name)
  return {
    pokedex_nr: pkmn.id,
    name: pkmn.name,
    types: sorted_types,
  }
}
