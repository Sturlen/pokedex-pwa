import React from "react"
import default_sprite from "./default-sprite.png"
import { PokemonInfo } from "../interface/PokemonInfo"

/**
 *
 */
export default function PokemonCard({
  name = "Pokemon",
  pokedex_nr = 0,
  default_sprite_src = default_sprite,
  flavour_text = "Flavour text goes here",
}: PokemonInfo) {
  const id = Math.floor(pokedex_nr).toString().padStart(3, "0")
  return (
    <div className={"PokemonCard"}>
      <div className={"CardHeader"}>
        <code className={"PokedexNr"}>{id}</code>
        <h1>{name}</h1>
      </div>
      <div className={"CardBody"}>
        <img
          className={"CardSprite"}
          src={default_sprite_src}
          alt="Pokemon portrait"
        />
        <p>{flavour_text}</p>
      </div>
    </div>
  )
}
