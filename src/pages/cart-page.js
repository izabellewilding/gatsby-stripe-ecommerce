import React from "react"
import Cart from "../components/shop/cart"
import Layout from "../components/layout.js"
import CheckoutJourneyIcons from "../components/shop/checkout-journey-icons"

const Checkout = () => {
  return (
    <Layout>
      <CheckoutJourneyIcons page="cartPage" />
      <div className=" min-h-screen bg-white">
        <Cart />
      </div>
    </Layout>
  )
}

export default Checkout
