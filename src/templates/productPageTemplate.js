import React, { useContext, useState, useRef } from "react"
import { Link } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { CartContext } from "../components/shop/context.js"
import Img from "../components/image"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import QuanitityButton from "../components/shop/quanitity-button"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const Template = ({ pageContext }) => {
  const [quantity, setQuantity] = useState(1)

  const ctx = useContext(CartContext)

  return (
    <Layout stripePromise={stripePromise}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Original Handmade Art | By Izabelle Wilding</title>
        <meta
          name={pageContext.node.product.name}
          content="Helmet application"
        />
      </Helmet>
      <div className=" relative bg-white w-screen py-6 flex m-auto justify-center">
        <div className="flex flex-col md:flex-row bg-white overflow-hidden md:w-3/5  shadow-md">
          <div className="w-full">
            <Img
              src={`/images/${pageContext.node.id}.jpg`}
              className="h-full"
            />
          </div>
          <div className="w-full p-4 flex flex-col justify-between">
            <h1 className="text-gray-900 font-bold text-2xl garamond">
              {pageContext.node.product.name}
            </h1>
            <h1 className="text-gray-700 font-bold garamond">
              {ctx.formatPrice(
                pageContext.node.price,
                pageContext.node.currency
              )}
            </h1>
            <p className="mt-2 text-gray-700 text-sm garamond">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </p>
            <p className=" w-12">
              <button onClick={() => setQuantity(quantity + 1)}>-</button>
              <input
                type="number"
                value={quantity}
                // onChange={event => updateQuantity(event.target.value)}
              />
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
            </p>
            <div className="flex item-center mt-2"></div>
            <div className="flex item-center justify-between mt-3">
              <button
                className="chivo-reg uppercase text-xs bg-gray-800 text-white border-gray-800 border-2 hover:bg-white hover:text-gray-800 py-2 px-3 whitespace-no-wrap"
                onClick={() => {
                  ctx.addToCart(pageContext.node, quantity)
                }}
              >
                {" "}
                Add to Cart
              </button>
              <Link
                className="chivo-reg uppercase text-xs border-gray-800 border-2 hover:bg-white hover:text-gray-800 bg-gray-800 text-white py-2 px-3 whitespace-no-wrap"
                to="/checkout"
              >
                Checkout{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Template
