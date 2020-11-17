import React from "react"
import { Add as DefaultIcon } from "@material-ui/icons"

import { useLocation, useHistory } from "react-router-dom"

import { StyledBottmNav, Route } from "./AppNav"

export type NavAction = {
  path: string
  icon?: React.ReactNode
  label?: string
}

export type NavProps = {
  actions: NavAction[]
}

/**
 * Switch content based on the given routes.
 */
export const RouteNavigation: React.FC<NavProps> = ({ actions, children }) => {
  const hist = useHistory()
  const loc = useLocation()
  const handleChange = (newRoute: string) => {
    // TODO: Cancel if route is the same.
    hist.push(newRoute)
  }

  const routes: Route[] = actions.map((page) => {
    return {
      to: page.path,
      buttonIcon: page.icon || <DefaultIcon />,
      buttonLabel: page.label || page.path,
    }
  })

  return (
    <StyledBottmNav
      currentRoute={loc.pathname}
      routes={routes}
      onTabChange={handleChange}
    >
      {children}
    </StyledBottmNav>
  )
}

export default RouteNavigation
