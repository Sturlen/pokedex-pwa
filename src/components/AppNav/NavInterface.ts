import { ReactNode } from "react"

/**
 * A single Route which can be navigated to.
 */
export type Route = {
  to: string
  buttonLabel: string
  buttonIcon: ReactNode
}

/**
 * Component which displays the current route's content.
 * Must be surrounded by a Router.
 */
export type TabNavigation = {
  currentRoute?: string
  routes: Route[]
  onTabChange?: (tab: string) => void
}
