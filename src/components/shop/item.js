import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "../../components/image"
import { CartContext } from "./context.js"

const Item = ({ sku }) => {
  const ctx = useContext(CartContext)
  return (
    <div className="py-6 w-full md:w-1/2 lg:w-1/3 flex flex justify-center">
      <div
        className="flex flex-col m-4 bg-white overflow-hidden shadow-md"
        style={{ minWidth: 359, maxWidth: 345, maxHeight: 558 }}
      >
        <div className="bg-cover w-full">
          <Img
            src={`/images/${sku.id}.jpg`}
            alt={sku.attributes.name}
            className="h-64 m-4"
          />
        </div>
        <div className=" w-full p-4">
          <h1 className="text-gray-900 font-bold text-2xl garamond">
            {sku.attributes.name}
          </h1>

          <div className="flex item-center mt-2"></div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold garamond">
              {ctx.formatPrice(sku.price, sku.currency)}
            </h1>
            <div></div>
            <Link
              role="button"
              className="text-lightPrimary chivo-reg uppercase text-xs border-gray-900 border-2 hover:bg-gray-800 hover:text-white mb-6 py-2 px-3 whitespace-no-wrap"
              to={`/${sku.attributes.name.replace(/ /g, "_")}`}
            >
              View Item
            </Link>
            {/* <button
              className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
              onClick={() => {
                cartCtx.addToCart(sku)
              }}
            >
              Add to Cart
            </button>
            <button classNameNames="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              <Link to="/checkout">Checkout </Link>{" "}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
