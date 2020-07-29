import * as z from "zod"
import { Resource, NamedResource } from "./NamedResource"

export const UnNamedResourceList = z.object({
  count: z.number().nonnegative(),
  next: z.string().url(),
  previous: z.string().url(),
  results: Resource.array(),
})

export const NamedResourceList = z.object({
  count: z.number().nonnegative(),
  next: z.string().url(),
  previous: z.string().url(),
  results: NamedResource.array(),
})
