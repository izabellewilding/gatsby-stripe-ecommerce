import React from "react"
import Cart from "../components/shop/cart"
import Layout from "../components/layout.js"
import JourneyIcons from "../components/shop/checkout-journey-icons"
import CheckoutJourneyIcons from "../components/shop/checkout-journey-icons"

const Checkout = () => {
  return (
    <Layout>
      <CheckoutJourneyIcons />
      <div className="h-screen bg-white">
        <Cart />
      </div>
    </Layout>
  )
}

export default Checkout
