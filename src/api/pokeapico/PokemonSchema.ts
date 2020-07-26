import * as z from "zod"
import { NamedResource } from "./NamedResource"
import { PokemonInfo } from "../../interface/PokemonInfo"

export const PokemonSchema = z.object({
  id: z.number().int(),
  name: z.string().nonempty(),
  //types: NamedResource.array(),
})

export type Pokemon = z.infer<typeof PokemonSchema>

export function pokemonToPokemonInfo(pkmn: Pokemon): PokemonInfo {
  return {
    pokedex_nr: pkmn.id,
    name: pkmn.name,
    //types: pkmn.types.map((type) => type.name),
  }
}
