import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ItemsListTemplate from "./product-list-template"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query PlantpotItems {
          skus: allStripeSku(
            filter: { product: { metadata: { range: { in: "plantpots" } } } }
          ) {
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
      render={({ skus }) => {
        return (
          <ItemsListTemplate
            skus={skus}
            stripePromise={stripePromise}
            message="Planter Collection"
          />
        )
      }}
    />
  )
}

export default Products
