import { range } from "lodash"
import { PokemonSchema, Pokemon, pokemonToPokemonInfo } from "./PokemonSchema"
import { PokemonAPI } from "../interface/PokemonAPI"
import { NamedResourceList } from "./APIResourceList"

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

  public fetchPokemonInPokedex = async () => {
    const res = await fetch(this.api + `/pokemon/`)
    const bodyjson = await res.json()
    const resources = await NamedResourceList.parseAsync(bodyjson)
    return resources.count
  }

  public fetchPokemonInfoList = async (offset: number, limit: number) => {
    const exclusive_offset = offset + 1
    // Due to an API limitation, individual requests are necessary. Should also be cached.
    const pokemon_requests = range(
      exclusive_offset,
      exclusive_offset + limit
    ).map((id) => {
      return this.fetchPokemonInfoById(id)
    })
    const results = await Promise.all(pokemon_requests)
    return results
  }
}
