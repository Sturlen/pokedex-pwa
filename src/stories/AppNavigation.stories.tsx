import React, { useState } from "react"

import { Typography } from "@material-ui/core"
import FavIcon from "@material-ui/icons/Favorite"
import RecentIcon from "@material-ui/icons/List"
import {
  HashRouter,
  useLocation,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom"
import BottomNav from "../components/AppNav/BottomNav"
import SideNav from "../components/AppNav/SideNav"

export default {
  title: "Navigation",
  component: null,
}
const twoTabs = [
  {
    to: "/favorites",
    buttonIcon: <FavIcon />,
    buttonLabel: "Favorites",
  },
  {
    to: "/recents",
    buttonIcon: <RecentIcon />,
    buttonLabel: "Recents",
  },
]

const Navigation = () => {
  const hist = useHistory()
  const loc = useLocation()
  const handleChange = (newRoute: string) => {
    hist.push(newRoute)
  }

  const defaultPath = twoTabs[0].to

  return (
    <>
      <Switch>
        <Route path={twoTabs[1].to}>
          <Typography>Tab2</Typography>
        </Route>
        <Route path={twoTabs[0].to}>
          <Typography>Tab1</Typography>
        </Route>
        <Redirect to={defaultPath} />
      </Switch>
      <BottomNav
        currentRoute={loc.pathname}
        routes={twoTabs}
        onTabChange={handleChange}
      />
    </>
  )
}

export const BottomNavWithHashRouter = () => {
  return (
    <HashRouter>
      <Navigation />
    </HashRouter>
  )
}

export const BottomNavigation = () => {
  const [route, setRoute] = useState(twoTabs[0].to)
  return (
    <BottomNav currentRoute={route} routes={twoTabs} onTabChange={setRoute} />
  )
}

export const SideNavigation = () => {
  const [route, setRoute] = useState(twoTabs[0].to)
  return (
    <SideNav currentRoute={route} routes={twoTabs} onTabChange={setRoute} />
  )
}
