import React from "react"

import { Paper, Hidden, ButtonBase } from "@material-ui/core"
import { WbSunny, AcUnit } from "@material-ui/icons"

const click = () => console.log("click")

type ItemProps = {
  id: number
}

const PokemonListItem: React.FC<ItemProps> = ({ id }) => (
  <Paper
    style={{
      position: "relative",
      padding: "10px",
      backgroundColor: "pink",
      display: "flex",
      flexDirection: "column",
    }}
    onClick={click}
    component={ButtonBase}
  >
    <img
      width={"100%"}
      src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
      alt="Pokemon"
      draggable={false}
    />
    <p>{"Pokemon Name"}</p>
    <Hidden xsDown>
      <div>
        <p>{`Nr. ${id}`}</p>
        <WbSunny />
        <AcUnit />
      </div>
    </Hidden>
  </Paper>
)

export default PokemonListItem
