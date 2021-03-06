import React, { useState, useCallback } from "react"
import Skeleton from "react-loading-skeleton"
import default_sprite from "./default-sprite.png"
import { PokemonInfo } from "../interface/PokemonInfo"

function UpperCaseFirst(text: string) {
  return text[0].toUpperCase() + text.substring(1).toLowerCase()
}

type ImgState = "IsLoading" | "Loaded" | "Failed"
/**
 * Simple Pokemon Card. Will show a skeleton component if props are not given.
 */
export function SimpleCard({
  pokedex_nr,
  name,
  types,
  default_sprite_src = default_sprite,
}: PokemonInfo) {
  const [img_state_css, setImageState] = useState<ImgState>("IsLoading")
  const handleLoad = useCallback(() => setImageState("Loaded"), [])
  const handleError = useCallback(() => setImageState("Failed"), [])
  const card_title = name ? UpperCaseFirst(name) : undefined

  return (
    <div className={"SimpleCard"}>
      <div className={"CardHeader"}>
        <p className={"Name"}>{card_title || <Skeleton />}</p>
        <PokedexNr id={pokedex_nr} />
      </div>

      <div className={"SpriteBox"}>
        <Types types={types} />
        <img
          className={`Sprite ${img_state_css}`}
          src={default_sprite_src}
          alt="Pokemon sprite"
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  )
}

interface TypeList {
  types?: string[]
  max_types?: number
}

/**
 * Show a pokemons types
 */
function Types({ types, max_types = 2 }: Readonly<TypeList>) {
  return (
    <ul className={"Types"}>
      {types?.slice(0, max_types).map((t: string) => (
        <li className={"Type TypeBack"} key={t}>
          <p>{UpperCaseFirst(t)}</p>
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
