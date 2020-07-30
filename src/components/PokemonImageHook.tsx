import { useQuery } from "react-query"

export function usePokemonImage(pokemon_id: number) {
  const clamped_id = Math.max(Math.round(pokemon_id))
  return useQuery(["Image", { id: clamped_id }], async (key, { id }) => {
    const src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return src
  })
}
