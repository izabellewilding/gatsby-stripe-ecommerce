import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    fontFamily: "chivo-reg",
    justifyContent: "center",
  },
}))

const InfoBar = theme => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid
        item
        md
        className="p-4 flex justify-center items-center text-center opacity-95"
      >
        <div className="ml-2">
          <div className=" uppercase leading-8">Free shipping</div>
          <div>On orders over £35</div>
        </div>
      </Grid>
      <Grid
        item
        md
        className=" p-4 flex justify-center opacity-95 text-center items-center"
      >
        <div className="ml-2">
          <div className=" uppercase leading-8">Online Ordering</div>
          <div>Convenient shopping 24/7</div>
        </div>
      </Grid>
      <Grid
        item
        md
        className=" p-4 flex justify-center opacity-95 text-center
        items-center"
      >
        <div className="ml-2">
          <div className="uppercase leading-8">Online Returns</div>
          <div>Return within 30 days</div>
        </div>
      </Grid>
    </Grid>
  )
}

export default InfoBar
