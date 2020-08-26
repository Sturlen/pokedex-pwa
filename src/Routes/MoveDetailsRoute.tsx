import React from "react"
import { toSafeInteger } from "lodash"
import { useParams } from "react-router-dom"
import { MoveDetailsPage } from "../Pages"

const MoveDetailsRoute = () => {
  const { id } = useParams()
  const moveId = toSafeInteger(id)

  return <MoveDetailsPage moveId={moveId} />
}

export default MoveDetailsRoute
