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
  },
  media: {
    height: 180,
  },
})

const Item = ({ sku }) => {
  const classes = useStyles()
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
            {sku.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${sku.product.name.replace(/ /g, "_")}`}>
          <Button size="small" color="secondary" variant="outlined">
            View Item
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Item
