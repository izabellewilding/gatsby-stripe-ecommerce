import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "../../components/image"
import { CartContext } from "./context.js"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: "1rem",
    minWidth: 325,
  },
  media: {
    height: 275,
  },
  cardAction: {
    padding: 17,
  },
  button: {
    borderRadius: 0,
    border: 2,
  },
})

const Item = ({ sku }) => {
  const classes = useStyles()
  console.warn("SKU:", sku)
  const ctx = useContext(CartContext)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Img
          className={classes.media}
          src={`/images/${sku.id}.jpg`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {sku.product.name}{" "}
          </Typography>
          <Typography variant="subheading1" color="textSecondary" component="p">
            {ctx.formatPrice(sku.price, sku.currency)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Link to={`/${sku.product.name.replace(/ /g, "_")}`}>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            classname={classes.button}
            style={{ borderRadius: 0, border: "solid 1.5px" }}
          >
            View Item
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Item
