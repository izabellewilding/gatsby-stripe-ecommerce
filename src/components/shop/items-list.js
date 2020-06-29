import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Item from "./item"
import { loadStripe } from "@stripe/stripe-js"
import Slider from "@material-ui/core/Slider"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({
  textBlock: {
    marginBottom: "1.666rem",
  },
}))

const Products = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  return (
    <StaticQuery
      query={graphql`
        query AllItems {
          skus: allStripeSku {
            edges {
              node {
                id
                currency
                price
                product {
                  name
                  metadata {
                    color
                    width
                  }
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => {
        return (
          <div className=" justify-evenly">
            <div className="w-full flex justify-end max-w-6xl">
              <div className="text-center w-full" style={{ maxWidth: 200 }}>
                <Typography variant="subtitle1">Filter by Price</Typography>
                <Typography variant="body2">Max Price £{value}</Typography>
                <Slider
                  value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                  aria-labelledby="continuous-slider"
                />
              </div>
            </div>
            <div className="flex flex-wrap m-auto max-w-4xl">
              {skus.edges.map(({ node: sku }) => (
                <Item key={sku.id} sku={sku} stripePromise={stripePromise} />
              ))}
            </div>
            {/* <Typography variant="subtitle1">
                We make all of our products by hand!
              </Typography>
              <Typography variant="body2" className={classes.textBlock}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography> */}
          </div>
        )
      }}
    />
  )
}

export default Products
