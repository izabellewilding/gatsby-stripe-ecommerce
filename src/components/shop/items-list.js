import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import Item from "./item"
import { loadStripe } from "@stripe/stripe-js"
import Slider from "@material-ui/core/Slider"
import { makeStyles } from "@material-ui/core/styles"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({}))

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
          <div>
            <div className="flex justify-evenly flex-wrap">
              {skus.edges.map(({ node: sku }) => (
                <Item key={sku.id} sku={sku} stripePromise={stripePromise} />
              ))}
            </div>
            <div>
              <Slider
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
        )
      }}
    />
  )
}

export default Products
