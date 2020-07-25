import React from "react"
import { PokemonInfo } from "../interface/PokemonInfo"

interface CardGridProps {
  cardlist?: PokemonInfo[]
  card_component: (props: PokemonInfo) => JSX.Element
}

/**
 * Show a pokemons types
 */
export function CardGrid({ cardlist, card_component: Card }: CardGridProps) {
  return (
    <div className={"CardGrid"}>
      {cardlist?.map((cardinfo, i) => (
        <li>
          <Card {...cardinfo} key={cardinfo.pokedex_nr} />
        </li>
      )) || <p>{"Nothing to see here"}</p>}
    </div>
  )
}