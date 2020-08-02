import * as z from "zod"
import { Resource, NamedResource } from "./NamedResource"

export const UnNamedResourceList = z.object({
  count: z.number().nonnegative(),
  next: z.string().url().nullable(),
  previous: z.string().url().nullable(),
  results: Resource.array(),
})

export const NamedResourceList = UnNamedResourceList.extend({
  results: NamedResource.array(),
})
