import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "../image"
import { StaticQuery } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { CartContext } from "./context"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"

import Typography from "@material-ui/core/Typography"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "1rem",
    minWidth: 250,
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

const LatestItems = () => {
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
        <div className="flex justify-center flex-col m-auto mb-6 max-w-4xl p-2 pb-8">
          <Typography
            variant="h3"
            className="text-center p-4 uppercase text-2xl m-4"
          >
            Latest Shop Items
          </Typography>
          <div className="flex flex-col md:flex-row ">
            {skus.edges.map(({ node: sku }) => (
              <LatestItem
                key={sku.id}
                sku={sku}
                stripePromise={stripePromise}
              />
            ))}
          </div>
        </div>
      )}
    />
  )
}

function CardLink(props) {
  return <Card component={Link} {...props} />
}

const LatestItem = ({ sku }) => {
  const ctx = useContext(CartContext)
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
export default LatestItems
