import React from "react"
import { Typography } from "@material-ui/core"

type DetailsPage = {
  moveId: number
}

const MoveDetailsPage: React.FC<DetailsPage> = ({ moveId }) => {
  return (
    <Typography>{`Move ${moveId} is a really strong move, if you are really strong to begin with.`}</Typography>
  )
}

export default MoveDetailsPage
