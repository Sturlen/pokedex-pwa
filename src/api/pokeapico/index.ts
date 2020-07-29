import { PokemonSchema, Pokemon, pokemonToPokemonInfo } from "./PokemonSchema"
import { PokemonAPI } from "../interface/PokemonAPI"

const DEFAULT_API = "https://pokeapi.co/api/v2"

/**
 * Concrete API implementation for the free pokemon API at pokeapi.co
 */
export default class PokeAPICo implements PokemonAPI {
  private readonly api: string

  constructor(api_endpoint: string = DEFAULT_API) {
    this.api = api_endpoint
  }

  public fetchPokemonInfoById = async (id: number) => {
    console.log("api", this, this?.api)
    const res = await fetch(this.api + `/pokemon/${id}`)
    const bodyjson = await res.json()
    console.log(bodyjson)
    const pkmn: Pokemon = await PokemonSchema.nonstrict().parseAsync(bodyjson)
    return pokemonToPokemonInfo(pkmn)
  }
}
