import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "../image"
import { CartContext } from "./context.js"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"

import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "1rem",
    minWidth: 285,
    boxShadow: "0 0 0 0",
  },
  media: {
    height: 250,
  },
  cardContent: {
    textAlign: "center",
  },
  button: {
    borderRadius: 0,
    border: 2,
    fontWeight: 300,
  },
})

const CardLink = props => {
  return <Card component={Link} {...props} />
}

const Item = ({ sku }) => {
  const classes = useStyles()
  const ctx = useContext(CartContext)

  return (
    <CardLink
      to={`/${sku.product.name.replace(/ /g, "_")}`}
      className={classes.root}
    >
      <CardActionArea>
        <Img
          className={classes.media}
          src={`/images/${sku.id}.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="subtitle1">
            {sku.product.name}{" "}
          </Typography>
          <Typography variant="subheading1" color="textSecondary" component="p">
            {ctx.formatPrice(sku.price, sku.currency)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions className={classes.cardAction}> */}
      {/* <Link to={`/${sku.product.name.replace(/ /g, "_")}`}>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            classname={classes.button}
            style={{ borderRadius: 0, border: "solid 1.5px" }}
          >
            View Item
          </Button>
        </Link> */}
      {/* </CardActions> */}
    </CardLink>
  )
}

export default Item
