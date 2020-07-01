import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import Img from "../image"
import { StaticQuery } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { CartContext } from "./context"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 195,
    margin: "3rem",
    minWidth: 250,
    boxShadow: "0 0 0 0",
  },
  media: {
    height: 210,
  },
  button: {
    borderRadius: 0,
    border: 2,
    fontWeight: 300,
  },
  box: {
    backgroundColor: theme.palette.secondary.light,
  },
  cardContent: {
    backgroundColor: "transparent",
    textAlign: "center",
  },
}))

const ProductsLatest = () => {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
        query latestItems {
          skus: allStripeSku(limit: 3) {
            edges {
              node {
                id
                currency
                price
                product {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <Box className={classes.box}>
          <Typography
            variant="h3"
            className="text-center pt-12 uppercase text-2xl m-4"
          >
            Latest Shop Items
          </Typography>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-between max-w-6xl m-auto">
            {skus.edges.map(({ node: sku }) => (
              <ProductLatest
                key={sku.id}
                sku={sku}
                stripePromise={stripePromise}
              />
            ))}
          </div>
        </Box>
      )}
    />
  )
}

function CardLink(props) {
  return <Card component={Link} {...props} />
}

const ProductLatest = ({ sku }) => {
  const ctx = useContext(CartContext)
  const classes = useStyles()

  return (
    <CardLink
      to={`/${sku.product.name.replace(/ /g, "_")}`}
      className={classes.root}
    >
      <CardActionArea>
        <Img className={classes.media} src={`/images/${sku.id}.jpg`} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="subtitle1">
            {sku.product.name}{" "}
          </Typography>
          <Typography variant="subheading1" color="textSecondary" component="p">
            {ctx.formatPrice(sku.price, sku.currency)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardLink>
  )
}
export default ProductsLatest
