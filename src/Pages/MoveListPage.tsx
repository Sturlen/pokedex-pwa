import React from "react"

import { Grid, Paper, ButtonBase } from "@material-ui/core"

export const MoveListPage = () => {
  const ids = Array.from(Array(40), (_, i) => i + 1)

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {ids.map((id) => (
          <Grid item xs={6} sm={3} md={2} lg={1} key={id}>
            <Paper
              style={{ position: "relative", padding: "10px" }}
              component={ButtonBase}
            >
              {`Move ${id}`}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MoveListPage
