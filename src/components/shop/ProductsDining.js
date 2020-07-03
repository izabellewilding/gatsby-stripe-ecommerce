import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import ItemsListTemplate from "./ProductListTemplate"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query DiningItems {
          skus: allStripeSku(
            filter: { product: { metadata: { range: { in: "dining" } } } }
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
        return <ItemsListTemplate skus={skus} message="Dining Collection" />
      }}
    />
  )
}

export default Products
