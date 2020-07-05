import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { loadStripe } from "@stripe/stripe-js"

import ItemsListTemplate from "./product-list-template"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({
  textBlock: {
    marginBottom: "1.666rem",
  },
}))

const AllProducts = () => {
  const classes = useStyles()

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
          <ItemsListTemplate
            skus={skus}
            stripePromise={stripePromise}
            message="All Shop Items"
          />
        )
      }}
    />
  )
}

export default AllProducts
