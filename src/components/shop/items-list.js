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

const Products = props => {
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
        console.warn("SKUS:", skus.edges)
        return (
          <div className="w-full flex flex-col m-auto max-w-5xl  items-center">
            <div className="flex md:flex-row w-full justify-between">
              <div className="flex justify-center items-center">
                <Typography variant="h1">{props.message}</Typography>
              </div>
              <div className="text-center w-full m-5" style={{ maxWidth: 200 }}>
                <Typography variant="subtitle1">Filter by Price</Typography>
                <Typography variant="body2">Max Price £{value}</Typography>
                <Slider
                  value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                  valueLabelDisplay="auto"
                  aria-labelledby="continuous-slider"
                  min={8}
                  max={80}
                  defaultValue={50}
                />
              </div>
            </div>

            <div
              className="flex flex-wrap m-auto justify-center"
              style={{ maxWidth: "94rem" }}
            >
              {skus.edges
                .filter(({ node }) => node.price <= value * 100)
                .map(({ node: sku }) => (
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
