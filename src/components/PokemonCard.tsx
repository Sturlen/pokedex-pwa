import React from "react"

interface PKMNCardProps {
  pokedex_nr: number
  name: string
}

export default function PokemonCard({ name, pokedex_nr }: PKMNCardProps) {
  return (
    <div className={"PokemonCard"}>
      <div className={"CardHeader"}>
        <code className={"PokedexNr"}>{pokedex_nr}</code>
        <h1>{name}</h1>
      </div>
      <div className={"CardBody"}>
        <p>{"A pokemon"}</p>
      </div>
    </div>
  )
}
