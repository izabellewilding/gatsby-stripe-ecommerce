import React from "react"
import { Link } from "gatsby"
import Img from "./image"
import { StaticQuery } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const LatestItems = () => {
  return (
    <StaticQuery
      query={graphql`
        query latestItems {
          skus: allStripeSku(limit: 3) {
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
      render={({ skus }) => (
        <div className="flex justify-center bg-gray-100 flex-col m-auto border-gray-800 shadow-md mb-6 max-w-4xl p-2 pb-8">
          <h1 className="text-center p-4 uppercase text-2xl m-4">
            Latest Shop Items
          </h1>
          <div className="flex flex-col md:flex-row ">
            {skus.edges.map(({ node: sku }) => (
              <LatestItem
                key={sku.id}
                sku={sku}
                stripePromise={stripePromise}
              />
            ))}
          </div>
        </div>
      )}
    />
  )
}

const LatestItem = ({ sku }) => {
  return (
    <Link
      to={`/${sku.product.name.replace(/ /g, "_")}`}
      className="w-full flex justify-center "
    >
      <div
        className=" m-2 bg-white overflow-hidden hover:shadow"
        style={{ minWidth: 159, maxWidth: 252, maxHeight: 358 }}
      >
        <div className="bg-cover w-full flex justify-center">
          <Img src={`/images/${sku.id}.jpg`} className=" h-40 w-48 my-2" />
        </div>
        <div className=" w-full p-4">
          <h1 className="text-gray-900 font-bold garamond">{sku.name}</h1>

          <div className="flex item-center mt-2"></div>
          <div className="flex item-center justify-between mt-3">
            <Link
              role="button"
              className="text-lightPrimary chivo-reg uppercase text-xs border-gray-900 border-2 hover:bg-gray-800 hover:text-white mb-6 py-2 px-3 whitespace-no-wrap"
              to={`/${sku.product.name.replace(/ /g, "_")}`}
            >
              View Item
            </Link>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default LatestItems
