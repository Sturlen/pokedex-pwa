import { useQuery } from "react-query"

export function usePokemonImage(id: number) {
  const clamped_id = Math.max(Math.round(id))
  return useQuery(["Image", { id: clamped_id }], async () => {
    const src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    const res = await fetch(src)
    const image_blob = await res.blob()
    return URL.createObjectURL(image_blob)
  })
}
