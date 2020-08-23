import React from "react"
import { Add as DefaultIcon } from "@material-ui/icons"

import {
  useLocation,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom"

import { BottomNav, Route as NavAction } from "./AppNav"

export type NavPage = {
  path: string
  render: React.ReactNode
  /** The container pages will be rendered inside. */
  button: {
    icon?: React.ReactNode
    label?: string
  }
}

export type NavProps = {
  pages: NavPage[]
  defaultPath?: string
}

/**
 * Switch content based on the given routes.
 */
export const RouteNavigation: React.FC<NavProps> = ({
  pages,
  defaultPath = "",
}) => {
  const hist = useHistory()
  const loc = useLocation()
  const handleChange = (newRoute: string) => {
    // TODO: Cancel if route is the same.
    hist.push(newRoute)
  }

  const actions: NavAction[] = pages.map((page) => {
    return {
      to: page.path,
      buttonIcon: page.button.icon || <DefaultIcon />,
      buttonLabel: page.button.label || page.path,
    }
  })

  return (
    <>
      <Switch>
        {pages.map(({ path, render }) => (
          <Route path={path} key={path}>
            {render}
          </Route>
        ))}

        <Redirect to={defaultPath} />
      </Switch>
      <BottomNav
        currentRoute={loc.pathname}
        routes={actions}
        onTabChange={handleChange}
      />
    </>
  )
}

export default RouteNavigation
