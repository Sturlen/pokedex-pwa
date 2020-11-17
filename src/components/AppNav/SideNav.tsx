import React from "react"
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@material-ui/core"
import { TabNavigation } from "./NavInterface"

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
    width: "240px",
  },
  item: {
    backgroundColor: "#FFFFFF",
  },
  itemSelected: {
    color: theme.palette.primary.main,
  },
}))

/**
 *
 */
const SideNav: React.FC<TabNavigation> = ({
  currentRoute,
  routes,
  onTabChange,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const directon = theme.direction === "ltr" ? "left" : "right"
  const handleChange = (newValue: string) => {
    onTabChange?.(newValue)
  }

  return (
    <Drawer className={classes.nav} variant="permanent" anchor={directon}>
      <List></List>
      {routes.map((r) => {
        const selected = currentRoute === r.to
        return (
          <ListItem
            className={classes.item}
            classes={{ selected: classes.itemSelected }}
            button
            key={r.to}
            selected={selected}
            onClick={() => handleChange(r.to)}
          >
            <ListItemIcon
              className={selected ? classes.itemSelected : undefined}
            >
              {r.buttonIcon}
            </ListItemIcon>
            <ListItemText primary={r.buttonLabel} />
          </ListItem>
        )
      })}
    </Drawer>
  )
}

export default SideNav
