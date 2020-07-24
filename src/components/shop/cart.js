import React, { useContext } from "react"
import RemoveIcon from "../../assets/cancel.svg"
import PoweredByStripe from "../../assets/powered_by_stripe.svg"
import { CartContext } from "./cart-context"
import { makeStyles } from "@material-ui/core/styles"
import { loadStripe } from "@stripe/stripe-js"
import { formatPrice, totalPrice } from "./utils"
// material UI imports
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({
  heading: {
    marginBottom: "1.66rem",
    textAlign: "center",
  },
  infoBox: {
    backgroundColor: theme.palette.primary.light,
    textAlign: "center",
    marginTop: "1rem",
    padding: "1rem",
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
      successUrl: `https://pottery-ecommerce.netlify.app/order-success/`,
      cancelUrl: `https://pottery-ecommerce.netlify.app/cart-page`,
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

          {/* add cart items from context to cart */}
          {ctx.items.map(item => (
            <tr className="border-b hover:bg-blue-100 bg-gray-100">
              <td>
                <Avatar src={`/images/${item.sku}.jpg`} alt="product" />
              </td>
              <td className="p-3 bg-">
                <div className="bg-white w-10 flex justify-center chivo-reg pt-4 pb-4">
                  {item.quantity}
                </div>
              </td>
              <td className="p-3 chivo-reg">{formatPrice(item.price)}</td>

              {/* remove item from cart button */}
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
              <PoweredByStripe />
            </td>
            <td className="chivo-reg text-right" colSpan="2">
              Total:<span>&nbsp;</span>
              <span>{formatPrice(totalPrice(ctx.items))}</span>
            </td>
          </tr>
        </tbody>{" "}
      </table>
      <Button
        color="secondary"
        onClick={redirectToCheckout}
        variant="contained"
        disabled={ctx.items.length === 0}
      >
        Pay Now
      </Button>{" "}
      <Box className={classes.infoBox}>
        <Typography>Fake card details to test the next step</Typography>
        <br />
        <Typography variant="body2">Card no: 4242 4242 4242 4242 </Typography>
        <Typography variant="body2">CVC: Any numbers</Typography>
        <Typography variant="body2">Expiry Date: Any future date</Typography>
      </Box>
    </div>
  )
}

export default Cart
