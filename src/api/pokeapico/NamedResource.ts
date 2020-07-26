import * as z from "zod"

export const NamedResource = z.object({
  name: z.string().nonempty(),
  url: z.string().url(),
})
