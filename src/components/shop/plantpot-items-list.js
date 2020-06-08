import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Item from "./item"
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
          <div className="flex justify-evenly flex-wrap bg-gray-400">
            {skus.edges.map(({ node: sku }) => (
              <Item key={sku.id} sku={sku} stripePromise={stripePromise} />
            ))}
          </div>
        )
      }}
    />
  )
}

export default Products