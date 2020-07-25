import React from "react"
import default_sprite from "./default-sprite.png"
import { PokemonInfo } from "../interface/PokemonInfo"

/**
 * Simple Pokemon Card
 */
export function SimpleCard({
  pokedex_nr = 0,
  name = "Pokemon",
  default_sprite_src = default_sprite,
}: PokemonInfo) {
  const id = "#" + Math.floor(pokedex_nr).toString().padStart(3, "0")
  return (
    <div className={"SimpleCard"}>
      <div className={"CardHeader"}>
        <p className={"Name"}>{name}</p>
        <p className={"PokedexNr"}>{id}</p>
      </div>

      <div className={"SpriteBox"}>
        <img
          className={"Sprite"}
          src={default_sprite_src}
          alt="Pokemon sprite"
        />
      </div>
    </div>
  )
}
