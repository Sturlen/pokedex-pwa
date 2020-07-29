import * as z from "zod"

/** Base type for most API resources */
export const Resource = z.object({
  url: z.string().url(),
})

/** Base type for resorces that can be found by name */
export const NamedResource = Resource.extend({
  name: z.string().nonempty(),
})
