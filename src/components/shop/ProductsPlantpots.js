import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import ItemsListTemplate from "./item-list-template"

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
        return <ItemsListTemplate skus={skus} message="Planter Collection" />
      }}
    />
  )
}

export default Products
