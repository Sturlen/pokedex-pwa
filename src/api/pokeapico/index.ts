import { range } from "lodash"
import { PokemonSchema, Pokemon, pokemonToPokemonInfo } from "./PokemonSchema"
import { PokemonAPI } from "../interface/PokemonAPI"
import { NamedResourceList } from "./APIResourceList"
import { PokemonInfo } from "../../interface/PokemonInfo"

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

const DEFAULT_IMAGE_ENDPOINT = (id: number) =>
  `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

/**
 * Concrete API implementation for the free pokemon API at pokeapi.co
 * @param api_endpoint API URL
 * @param placeholderFunc Function to create a placeholder object when a request fails.
 */
export default class PokeAPICo implements PokemonAPI {
  private readonly api: string
  private readonly image_endpoint: (id: number) => string
  private readonly placeholder: (id: number) => PokemonInfo

  constructor({
    apiEndpoint = DEFAULT_API,
    placeholderFunc = DEFAULT_PLACEHOLDER,
    imageEndpoint = DEFAULT_IMAGE_ENDPOINT,
  } = {}) {
    this.api = apiEndpoint
    this.placeholder = placeholderFunc
    this.image_endpoint = imageEndpoint
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
    const image_url = this.image_endpoint(clamped_id)
    const res = await fetch(image_url)
    const image_blob = await res.blob()
    return URL.createObjectURL(image_blob)
  }

  public fetchPokemonImage = async (pokemon_id: number) => {
    // Try getting from cache
    let image_url = ""

    try {
      image_url = await this.pokemonImageQuery(pokemon_id)
    } catch (error) {
      console.error(`Image ${pokemon_id} was not found`)
    }

    return image_url
  }
}
