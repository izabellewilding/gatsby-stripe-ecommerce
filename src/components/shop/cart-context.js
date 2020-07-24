import React, { useState, createContext, useEffect } from "react"
import { Link } from "gatsby"
import "@stripe/stripe-js"
import "@rmwc/snackbar/styles"
import "@rmwc/button/styles"
import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"

export const CartContext = createContext({
  items: [],
  addToCart: () => {},
})

export default function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  const [removedNotification, setRemovedNotification] = useState(false)
  const [quantityUpdated, setQuantityUpdated] = useState(false)

  //to load the stored cart items from local storage
  useEffect(() => {
    function loadCartItems() {
      //if the window is there, run getItem()
      const cartItems = window && window.localStorage.getItem("cart")
      //try to return the cart items
      try {
        return JSON.parse(cartItems)
        //if there are any errors in the try block, catch processes the error
      } catch (error) {
        console.error("error caught loading cart items", error)
      }
    }
    //if loadCartItems() is successful, setItems to the value of running the function
    if (loadCartItems()) {
      setItems(loadCartItems())
    }
  }, [])

  function addToCart(newItem, quantity) {
    newItem.quantity = quantity
    let updatedItems = []
    //check that the newItem is not present in the existing items array
    if (!items.find(item => item.id === newItem.id)) {
      //copy the current list of items and add the new item to the updatedItems array
      updatedItems = [...items, { ...newItem, sku: newItem.id }]
      setOpen(!open)
    } else {
      // update quantity of the item if it already exists calls the function for each item
      updatedItems = items.map(item => {
        if (item.id === newItem.id) {
          // merge everything from newItem on previous item to update quantity
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

  function removeFromCart(unwantedItemId) {
    const filteredItems = items.filter(item => item.id !== unwantedItemId)
    setItems(filteredItems)
    window.localStorage.setItem("cart", JSON.stringify(filteredItems))
    setRemovedNotification(!removedNotification)
  }

  const continueShoppingButton = (
    <Link to="shop-home" size="small" className="uppercase text-teal-300">
      Keep Shopping{" "}
    </Link>
  )
  const addedToCartButtons = (
    <>
      <Link
        to="cart-page"
        size="small"
        className="uppercase mr-4 text-teal-300"
      >
        Checkout
      </Link>
      {continueShoppingButton}
    </>
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
      <>
        {/* To do: Reuse single snackbar for multiple notifications by updating the message in state */}
        {/* Added to cart notification */}
        <Snackbar
          open={open}
          onClose={evt => setOpen(false)}
          autoHideDuration={6000}
        >
          <SnackbarContent
            message="Item successfully added to cart!"
            action={addedToCartButtons}
          />
        </Snackbar>
        {/* item removed from cart */}
        <Snackbar
          open={removedNotification}
          onClose={evt => setRemovedNotification(false)}
          autoHideDuration={6000}
        >
          <SnackbarContent
            message="Item successfully removed from cart"
            label="back to shop"
            action={continueShoppingButton}
          />
        </Snackbar>
        {/* Item quantity updated */}
        <Snackbar
          open={quantityUpdated}
          onClose={evt => setQuantityUpdated(false)}
          autoHideDuration={6000}
        >
          <SnackbarContent
            message="Item quantity successfully updated!"
            action={addedToCartButtons}
          />
        </Snackbar>
      </>
    </CartContext.Provider>
  )
}
