import React from "react"
import { PokemonInfo } from "../interface/PokemonInfo"

interface CardGridProps {
  cardlist?: PokemonInfo[]
  card_component: (props: PokemonInfo) => JSX.Element
}

/**
 * Display a list of pokemon cards.
 */
export function CardGrid({ cardlist, card_component: Card }: CardGridProps) {
  return (
    <div className={"CardGrid"}>
      {cardlist?.map((cardinfo) => (
        <li>
          <Card {...cardinfo} key={cardinfo.pokedex_nr} />
        </li>
      )) || <p>{"Nothing to see here"}</p>}
    </div>
  )
}
