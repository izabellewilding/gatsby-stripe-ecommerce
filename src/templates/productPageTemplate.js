import React, { useContext, useState, useRef } from "react"
import { Link } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { CartContext } from "../components/shop/context.js"
import Img from "../components/image"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import QuanitityButton from "../components/shop/quanitity-button"
import ArrowDown from "../assets/down-arrow.svg"
import ArrowUp from "../assets/up-arrow.svg"

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
        <div className="flex flex-col md:flex-row bg-white overflow-hidden  shadow-md">
          <div className="w-full flex items-center justify-center  md:p-4">
            <Img
              src={`/images/${pageContext.node.id}.jpg`}
              style={{
                minWidth: 310,
                minHeight: 350,
                maxHeight: 450,
                maxWidth: 250,
              }}
            />
          </div>
          <div className="w-full p-4 flex flex-col justify-start p-10">
            <h1 className="text-gray-900 font-bold text-3xl garamond mb-8">
              {pageContext.node.product.name}
            </h1>
            <h1 className="text-gray-700 font-bold text-lg garamond mb-6">
              {ctx.formatPrice(
                pageContext.node.price,
                pageContext.node.currency
              )}
            </h1>
            <p className="mt-2 text-gray-700 garamond mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </p>
            <section className="flex flex-row  text-gray-600 text-sm chivo-reg mb-6">
              <span className="flex items-center rounded-lg bg-gray-100 px-3 mr-6 mb-4 h-8">
                Color: {pageContext.node.product.metadata.color}
              </span>
              <span className="flex items-center rounded bg-gray-100 px-3 h-8">
                Width: {pageContext.node.product.metadata.width}
              </span>
            </section>
            <section className="flex flex-row items-center w-10 mb-6">
              <p className="flex flex-col">
                <button
                  className="flex justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <ArrowUp className=" w-6" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  className="bg-gray-200 w-10 text-center pl-3 py-1"
                  // onChange={event => updateQuantity(event.target.value)}
                />
                <button
                  className="flex justify-center"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <ArrowDown className="w-6" />
                </button>
              </p>
              <div className="flex item-center justify-start h-10 ml-6">
                <button
                  className="chivo-reg uppercase text-xs bg-gray-800 text-white border-gray-800 border-2 hover:bg-white hover:text-gray-800 py-2 px-3 whitespace-no-wrap mr-6"
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
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Template
