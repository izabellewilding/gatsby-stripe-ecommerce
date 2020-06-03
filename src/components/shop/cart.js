import React, { useContext } from "react"
import Img from "../image.js"
import RemoveIcon from "../../assets/cancel.svg"
import PoweredByStripe from "../../assets/powered_by_stripe.svg"
import { CartContext } from "./context"
import { loadStripe } from "@stripe/stripe-js"
// import "../../styles/all.css"

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const Cart = () => {
  const ctx = useContext(CartContext)

  const redirectToCheckout = async event => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: ctx.items.map(item => ({
        quantity: item.quantity,
        sku: item.sku,
      })),
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `https://www.izabelleart.com/checkout`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <div className="px-3 py-12 flex justify-center flex-col max-w-xl m-auto my-12">
      <table className=" max-w-xl m-auto text-md bg-white shadow-md rounded mb-4 ">
        <tbody>
          <tr className="text-sm chivo-reg border-b text-gray-700">
            <th className="text-left p-3 pr-0">Item</th>
            <th className="text-left p-3 pr-0"> Quantity</th>
            <th className="text-left p-3 pr-0">Price</th>
            <th className="text-left p-3">Remove</th>
          </tr>

          {ctx.items.map(item => (
            <tr className="border-b hover:bg-blue-100 bg-gray-100">
              {/* <td className="p-3 px-5"></td> */}
              <td className="pr-0">
                <Img
                  src={`/images/${item.sku}.jpg`}
                  alt={item.name}
                  style={{ height: 80, width: 80 }}
                />
              </td>
              <td className="p-3 bg-">
                <div className="bg-white w-10 flex justify-center chivo-reg pt-4 pb-4">
                  {item.quantity}
                </div>
              </td>
              <td className="p-3  chivo-reg">{ctx.formatPrice(item.price)}</td>
              <td className="p-3 ">
                <button
                  onClick={() => {
                    ctx.removeFromCart(item.id)
                  }}
                  className=""
                >
                  <RemoveIcon className="h-4 removeIcon m-2" />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2">
              <PoweredByStripe className="" />
            </td>
            <td
              className="chivo-reg"
              colSpan="2"
              style={{ textAlign: "right" }}
            >
              Total:<span>&nbsp;</span>
              <span>{ctx.formatPrice(totalPrice(ctx.items))}</span>
            </td>
            {/* <td className="flex justify-center">
              <button
                className="checkoutButton flex flex-row items-center chivo-reg uppercase text-xs border-gray-800 border-2 hover:bg-white hover:text-gray-800 bg-gray-800 text-white py-1 px-2 whitespace-no-wrap"
                onClick={redirectToCheckout}
              >
                {" "}
                Checkout <Basket className="ml-2 h-4 basket" />
              </button>
            </td> */}
          </tr>
        </tbody>{" "}
      </table>
      <button
        className="mt-2 button w-full text-lightPrimary chivo-reg uppercase  border-gray-900 border-2 hover:bg-white bg-gray-800 hover:text-gray-800 text-white rounded p-2 whitespace-no-wrap"
        onClick={redirectToCheckout}
      >
        Pay Now
      </button>
    </div>
  )
}

export default Cart
