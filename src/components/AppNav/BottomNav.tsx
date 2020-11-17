import React from "react"
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core"
import { TabNavigation } from "./NavInterface"

const useStyles = makeStyles(() => ({
  nav: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    right: "0px",
    top: "auto",
  },
}))

/**
 *
 */
const BottomNav: React.FC<TabNavigation> = ({
  className,
  currentRoute,
  routes,
  onTabChange,
}) => {
  const classes = useStyles()
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    onTabChange?.(newValue)
  }

  return (
    <BottomNavigation
      className={className || classes.nav}
      value={currentRoute}
      onChange={handleChange}
    >
      {routes.map((r) => (
        <BottomNavigationAction
          value={r.to}
          icon={r.buttonIcon}
          label={r.buttonLabel}
          key={r.to}
        />
      ))}
    </BottomNavigation>
  )
}

export default BottomNav
