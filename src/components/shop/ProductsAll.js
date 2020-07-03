import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import ItemsListTemplate from "./ProductListTemplate"

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
        return <ItemsListTemplate skus={skus} message="All Shop Items" />
      }}
    />
  )
}

export default AllProducts
