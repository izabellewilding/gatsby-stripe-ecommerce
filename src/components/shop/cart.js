import React, { useContext } from "react"
import Img from "../image.js"
import RemoveIcon from "../../assets/cancel.svg"
import PoweredByStripe from "../../assets/powered_by_stripe.svg"
import { CartContext } from "./context"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { loadStripe } from "@stripe/stripe-js"
// import "../../styles/all.css"

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({
  heading: {
    marginBottom: "1.66rem",
    textAlign: "center",
  },
}))

const Cart = () => {
  const ctx = useContext(CartContext)
  const classes = useStyles()

  const redirectToCheckout = async event => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: ctx.items.map(item => ({
        sku: item.sku,
        quantity: item.quantity,
      })),

      mode: "payment",
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `https://localhost:8000/cart-page`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <div className="px-3 py-16 flex justify-center flex-col max-w-4xl m-auto ">
      <Typography variant="h3" className={classes.heading}>
        Your Cart
      </Typography>
      <table className=" max-w-4xl m-auto text-md bg-white shadow-md rounded mb-4 ">
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
                  alt="product"
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
