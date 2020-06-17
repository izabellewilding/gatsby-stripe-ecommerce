import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"
import autoprefixer from "autoprefixer"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    justifyContent: "center",
    maxWidth: 1970,
    margin: "auto",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  // subtitle1: {
  //   color: theme.palette.primary,
  // },
}))

const InfoBar = theme => {
  const classes = useStyles()

  return (
    <Grid container className={classes.gridContainer}>
      <Grid
        item
        md
        className="p-2 flex justify-center items-center text-center opacity-95"
      >
        <div className="ml-2">
          <Typography variant="body1">Free shipping</Typography>
          <Typography variant="body1">On orders over £35</Typography>
        </div>
      </Grid>
      <Grid
        item
        md
        className=" p-4 flex justify-center opacity-95 text-center items-center"
      >
        <div className="ml-2">
          <Typography variant="body1">Online Ordering</Typography>

          <Typography variant="body1">Convenient shopping 24/7</Typography>
        </div>
      </Grid>
      <Grid
        item
        md
        className=" p-4 flex justify-center opacity-95 text-center
        items-center"
      >
        <div className="ml-2">
          <Typography variant="body1">Online Returns</Typography>

          <Typography variant="body1">Return within 30 days</Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default InfoBar
