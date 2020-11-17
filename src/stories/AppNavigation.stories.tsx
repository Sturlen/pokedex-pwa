import React, { useState } from "react"

import FavIcon from "@material-ui/icons/Favorite"
import RecentIcon from "@material-ui/icons/List"
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
