import React, { useState, createContext, useEffect } from "react"
import { navigate } from "gatsby"
import "@stripe/stripe-js"
import "@rmwc/snackbar/styles"
import "@rmwc/button/styles"
import { Snackbar, SnackbarAction } from "@rmwc/snackbar"

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
  totalItems: () => {},
  formatPrice: () => {},
})

export default function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  const [removedNotification, setRemovedNotification] = useState(false)
  const [quantityUpdated, setQuantityUpdated] = useState(false)

  //
  useEffect(() => {
    function loadCartItems() {
      const cartItems = window && window.localStorage.getItem("cart")
      try {
        return JSON.parse(cartItems)
      } catch (error) {}
    }
    if (loadCartItems()) {
      setItems(loadCartItems())
    }
  }, [])

  function addToCart(newItem, quantity) {
    newItem.quantity = quantity
    let updatedItems = []
    if (!items.find(item => item.id === newItem.id)) {
      // add new item to the cart array
      updatedItems = [...items, { ...newItem, sku: newItem.id }]
      setOpen(!open)
    } else {
      // update quantity of item if it already exists
      updatedItems = items.map(item => {
        if (item.id === newItem.id) {
          // merge in new item
          return {
            ...item,
            ...newItem,
          }
        }
        return item
      })
      setQuantityUpdated(!quantityUpdated)
    }
    setItems(updatedItems)
    window.localStorage.setItem("cart", JSON.stringify(updatedItems))
  }

  function formatPrice(price) {
    return `£${(price * 0.01).toFixed(2)}`
  }

  function removeFromCart(unwantedItemId) {
    const filteredItems = items.filter(item => item.id !== unwantedItemId)
    setItems(filteredItems)
    window.localStorage.setItem("cart", JSON.stringify(filteredItems))
    setRemovedNotification(!removedNotification)
  }

  function totalItems(items) {
    return items.reduce((acc, item) => acc + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        totalItems,
        formatPrice,
        removeFromCart,
      }}
    >
      {children}
      <>
        {/* progress notifications */}
        {/* To do: Reuse single snackbar for multiple notifications by updating the message in state */}
        <Snackbar
          open={open}
          onClose={evt => setOpen(false)}
          message="Item successfully added to cart!"
          dismissesOnAction
          action={[
            <SnackbarAction
              label="Checkout"
              onClick={() => navigate("/cart-page")}
            />,
            <SnackbarAction
              label="Keep Shopping"
              onClick={() => navigate("/shop-home")}
            />,
          ]}
          stacked
          timeout={4000}
        />

        <Snackbar
          open={removedNotification}
          onClose={evt => setRemovedNotification(false)}
          message="Item removed from cart"
          dismissesOnAction
          action={[
            <SnackbarAction
              label="back to shop"
              onClick={() => navigate("/shop-home")}
            />,
          ]}
          stacked
          timeout={5000}
        />

        <Snackbar
          open={quantityUpdated}
          onClose={evt => setQuantityUpdated(false)}
          message="Item quantity successfully updated!"
          dismissesOnAction
          action={[
            <SnackbarAction
              label="Checkout"
              onClick={() => navigate("/cart-page")}
            />,
            <SnackbarAction
              label="Keep Shopping"
              onClick={() => navigate("/shop-home")}
            />,
          ]}
          stacked
          timeout={4000}
        />
      </>
    </CartContext.Provider>
  )
}
