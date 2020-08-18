import React, { ReactNode } from "react"

import {
  Toolbar,
  Typography,
  CssBaseline,
  AppBar,
  Container,
  BottomNavigation as Navigation,
  BottomNavigationAction as NavAction,
  makeStyles,
  Box,
} from "@material-ui/core"

type Page = {
  label: string
  icon: ReactNode
  content?: ReactNode
}

type AppNavigationProps = {
  defaultTabIndex?: number
  tabs: Page[]
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  nav: {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    right: "0px",
    top: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
}))

const AppNavigation = ({ defaultTabIndex = 0, tabs }: AppNavigationProps) => {
  const classes = useStyles()
  const [tabIndex, setTabIndex] = React.useState(defaultTabIndex)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue + 1)
  }

  const makeAction = ({ label, icon }: Page, index: number) => (
    <NavAction label={label} icon={icon} key={index} />
  )
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6">Pokédex</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.root}>
          <Box>{tabs?.[tabIndex]?.content}</Box>
        </Container>
        <Navigation
          value={tabIndex}
          onChange={handleChange}
          className={classes.nav}
          showLabels
        >
          {tabs ? tabs.map(makeAction) : null}
        </Navigation>
      </main>
    </div>
  )
}

export default AppNavigation
