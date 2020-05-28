import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Item from "./item"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query SkusForProduct {
          skus: allStripeSku {
            edges {
              node {
                id
                price
                currency
                attributes {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <div className="flex justify-evenly flex-wrap">
          {skus.edges.map(({ node: sku }) => (
            <Item key={sku.id} sku={sku} stripePromise={stripePromise} />
          ))}
        </div>
      )}
    />
  )
}

export default Products
