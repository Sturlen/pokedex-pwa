import { PokemonSchema, Pokemon, pokemonToPokemonInfo } from "./PokemonSchema"
import PokemonQuery from "../../interface/queries/PokemonQuery"

const DEFAULT_API = "https://pokeapi.co/api/v2"

export default function makeAPI(api_endpoint: string = DEFAULT_API) {
  const pokemonInfo: PokemonQuery = async (id: number) => {
    const res = await fetch(api_endpoint + `/pokemon/${id}`)
    const bodyjson = await res.json()
    console.log(bodyjson)
    const pkmn: Pokemon = await PokemonSchema.nonstrict().parseAsync(bodyjson)
    return pokemonToPokemonInfo(pkmn)
  }
  return {
    pokemonInfo,
  }
}
