import { range } from "lodash"
import { PokemonSchema, Pokemon, pokemonToPokemonInfo } from "./PokemonSchema"
import { PokemonAPI } from "../interface/PokemonAPI"
import { NamedResourceList } from "./APIResourceList"
import { PokemonInfo } from "../../interface/PokemonInfo"
import { queryCache, QueryKeyOrPredicateFn, AnyQueryKey } from "react-query"
import { string as stringScema } from "zod"

const DEFAULT_API = "https://pokeapi.co/api/v2"

async function placeholderOnFailure<
  TRequestArgs extends Array<unknown>,
  TReturnVal
>(
  request: (...args: TRequestArgs) => Promise<TReturnVal>,
  makePlaceholder: (...args: TRequestArgs) => TReturnVal,
  args: TRequestArgs
) {
  try {
    return await request(...args)
  } catch (e) {
    console.error(e)
    return makePlaceholder(...args)
  }
}

const DEFAULT_PLACEHOLDER = (pokedex_nr: number): PokemonInfo => {
  return { pokedex_nr, name: "Error" }
}

/**
 * Concrete API implementation for the free pokemon API at pokeapi.co
 * @param api_endpoint API URL
 * @param placeholderFunc Function to create a placeholder object when a request fails.
 */
export default class PokeAPICo implements PokemonAPI {
  private readonly api: string
  private readonly placeholder: (id: number) => PokemonInfo

  constructor(
    api_endpoint: string = DEFAULT_API,
    placeholderFunc: (id: number) => PokemonInfo = DEFAULT_PLACEHOLDER
  ) {
    this.api = api_endpoint
    this.placeholder = placeholderFunc
  }

  public fetchPokemonInfoById = async (id: number) => {
    const clamped_id = Math.max(1, Math.round(id))
    const request_url = this.api + `/pokemon/${clamped_id}`
    let res: Response

    try {
      res = await fetch(request_url)
    } catch (error) {
      if (error instanceof Error) {
        // TODO: Standardize request and error handling for the API
        error.message = `Pokemon API request at ${request_url} failed : ${error.message}`
        throw error
      }
      throw new Error("API request failed")
    }

    if (!res.ok) {
      let text = ""
      try {
        text = await res.text()
      } catch (error) {
        throw new Error("API request failed, " + res.statusText)
      }

      if (text === "Not Found") {
        throw new Error(`Pokemon ${clamped_id} could not be found `)
      }
    }

    const bodyjson = await res.json()
    const pkmn: Pokemon = await PokemonSchema.nonstrict().parseAsync(bodyjson)

    const image_src = await this.fetchPokemonImage(id)

    return pokemonToPokemonInfo(pkmn, image_src)
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
    const fetchPokemonOrPlaceholder = (id: number) =>
      placeholderOnFailure(this.fetchPokemonInfoById, this.placeholder, [id])

    const pokemon_requests = range(
      exclusive_offset,
      exclusive_offset + limit
    ).map(async (id) => await fetchPokemonOrPlaceholder(id))
    const results = await Promise.all(pokemon_requests)

    return results
  }

  private pokemonImageQuery = async (pokemon_id: number) => {
    const clamped_id = Math.max(Math.round(pokemon_id))
    const res = await fetch(
      `https://pokeres.bastionbot.org/images/pokemon/${clamped_id}.png`
    )
    const image_blob = await res.blob()
    return URL.createObjectURL(image_blob)
  }

  public fetchPokemonImage = async (pokemon_id: number) => {
    // Try getting from cache
    let image_url = ""

    const query_key: AnyQueryKey = ["PokemonImage", { id: pokemon_id }]

    try {
      const cached_image = queryCache.getQueryData(query_key)
      image_url = stringScema().url().parse(cached_image) // TODO: IsUrl()
      console.log(`Image ${pokemon_id} was retrived from cache`)
    } catch (error) {
      console.error(`Image ${pokemon_id} not found in cache, trying fetch`)
    }

    try {
      image_url = await this.pokemonImageQuery(pokemon_id)
      console.log(`Image ${pokemon_id} fetched`)
      queryCache.setQueryData(query_key, image_url)
      console.log(`Image ${pokemon_id} was stored in cache`)
    } catch (error) {
      console.error(`Image ${pokemon_id} was not found`)
    }

    return image_url
  }
}
