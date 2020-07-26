import * as z from "zod"
import { NamedResource } from "./NamedResource"

export const PokemonSchema = {
  id: z.number().int(),
  name: z.string().nonempty(),
  types: NamedResource.array(),
}
