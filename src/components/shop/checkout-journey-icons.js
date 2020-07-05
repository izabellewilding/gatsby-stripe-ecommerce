import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { Container } from "@material-ui/core"
import cx from "classnames"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    flexGrow: 1,
    justifyContent: "space-evenly",
    marginTop: "2.666rem",
  },
  gridItemContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: 75,
  },
  gridItem: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: "70px",
    height: "70px",
    marginBottom: "1.666rem",
    fontSize: "1.75rem",
    boxShadow: "0px 0px 0px 0px",
    border: "solid 1px #e2e2e2",
    boxSizing: "border-box",
    fontFamily: "raleway",
    lineHeight: "1.75",
    borderRadius: "50%",
    textTransform: "uppercase",
    "@media (min-width: 960px)": {
      flexGrow: 0,
      maxWidth: "100%",
      flexBasis: "auto",
    },
  },
  gridItemActive: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

const CheckoutJourneyIcons = ({ page }) => {
  const classes = useStyles()

  return (
    <Container>
      <Grid container className={classes.gridContainer}>
        <Grid item md className={classes.gridItemContainer}>
          <Grid
            item
            md
            className={cx(classes.gridItem, {
              [classes.gridItemActive]: page === "cart-page",
            })}
          >
            <span>1</span>
          </Grid>
          <p className="raleway text-center">Shopping Cart</p>
        </Grid>
        <Grid item md className={classes.gridItemContainer}>
          <Grid item md className={classes.gridItem}>
            <span>2</span>
          </Grid>
          <p className="raleway text-center">Check out</p>
        </Grid>
        <Grid item md className={classes.gridItemContainer}>
          <Grid
            item
            md
            className={cx(classes.gridItem, {
              [classes.gridItemActive]: page === "order-success",
            })}
          >
            <span>3</span>
          </Grid>
          <p className="raleway text-center">Order Complete</p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CheckoutJourneyIcons
