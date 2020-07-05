import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "../image-query"
import { CartContext } from "./cart-context"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import { formatPrice } from "./utils"

import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
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
}))

const CardLink = props => {
  return <Card component={Link} {...props} />
}

const ProductTemplate = ({ sku }) => {
  const classes = useStyles()

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
          <Typography variant="subtitle1">{sku.product.name} </Typography>
          <Typography variant="subtitle1">
            {formatPrice(sku.price, sku.currency)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardLink>
  )
}

export default ProductTemplate
