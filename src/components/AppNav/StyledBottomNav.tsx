import React from "react"

import { BottomNav, TabNavigation } from "./"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    overflowX: "hidden",
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
    <>
      <div className={classes.container}>{children}</div>
      <BottomNav className={classes.nav} {...props} />
    </>
  )
}

export default StyledBottomNavigation
