import React from "react"

import { BottomNav, TabNavigation } from "./"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    bottom: "0px",
    left: "0px",
    right: "0px",
    top: "0px",
  },
  nav: {
    position: "sticky",
    bottom: "0px",
    left: "0px",
    right: "0px",
    top: "auto",
  },
}))

const StyledBottomNavigation: React.FC<TabNavigation> = ({
  children,
  ...props
}) => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.root}>{children}</div>
      <BottomNav className={classes.nav} {...props} />
    </div>
  )
}

export default StyledBottomNavigation
