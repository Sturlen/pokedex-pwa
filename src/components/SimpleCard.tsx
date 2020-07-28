import React from "react"
import Skeleton from "react-loading-skeleton"
import default_sprite from "./default-sprite.png"
import { PokemonInfo } from "../interface/PokemonInfo"

/**
 * Simple Pokemon Card
 */
export function SimpleCard({
  pokedex_nr,
  name,
  types,
  default_sprite_src = default_sprite,
}: PokemonInfo) {
  return (
    <div className={"SimpleCard"}>
      <div className={"CardHeader"}>
        <p className={"Name"}>{name || <Skeleton />}</p>
        <PokedexNr id={pokedex_nr} />
      </div>

      <div className={"SpriteBox"}>
        <Types types={types} />
        <img
          className={"Sprite"}
          src={default_sprite_src}
          alt="Pokemon sprite"
        />
      </div>
    </div>
  )
}

interface TypeList {
  types?: string[]
}

/**
 * Show a pokemons types
 */
function Types({ types }: TypeList) {
  return (
    <ul className={"Types"}>
      {types?.map((t) => (
        <li className={"Type TypeBack"}>
          <p>{t}</p>
        </li>
      )) || (
        <p className={"Type"}>
          <Skeleton />
        </p>
      )}
    </ul>
  )
}

type PokedexNrProps = {
  id?: number
}

/**
 * Formatted Pokedex Nr. Returns a loading skeleton in its place if no id is given.
 */
function PokedexNr({ id }: PokedexNrProps) {
  const formatId = (dex_id: number) =>
    "#" + Math.floor(dex_id).toString().padStart(3, "0").substring(0, 3)
  return <p className={"PokedexNr"}>{id ? formatId(id) : <Skeleton />}</p>
}
