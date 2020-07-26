import { range } from "lodash"
import PokemonQuery from "../queries/PokemonQuery"
import Pikachu from "./PokemonCard"
import PokemonQueryList from "../queries/PokemonQueryList"

export const PokemonQuerySimple: PokemonQuery = async (id) => {
  return { ...Pikachu, pokedex_nr: id }
}

export const PokemonQueryMulti: PokemonQueryList = async (offset, limit) => {
  const exclusive_offset = offset + 1
  return range(exclusive_offset, exclusive_offset + limit).map((id) => {
    return { ...Pikachu, pokedex_nr: id }
  })
}
