import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import Logo from "../assets/name.svg"
import Basket from "../assets/supermarket.svg"
import { CartContext } from "./shop/context"
import Etsy from "../assets/etsy-drawn-logo.svg"
import Flickr from "../assets/flickr.svg"
import NavDrawer from "../components/nav-drawer"
// import Bird from "../assets/bird-green.svg"
// import { CartContext } from "../components/shop-home/context"

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const cartCtx = useContext(CartContext)
  // const ctx = useContext(CartContext)
  return (
    <>
      <header className=" w-full fixed bg-pattern flex justify-center overflow-hidden align-middle border-b border-gray-200 h-66 bg-white">
        {/* <Bird className="bird" />{" "} */}

        <div className="relative w-screen flex justify-center items-center flex-col max-w-6xl md:pl-6">
          <div>
            <Link to="/" className="m-auto bg-white">
              <h1 className="text-gray-900 my-8 text-2xl text-center uppercase chivo-reg">
                Pastel Ceramics
              </h1>
            </Link>
            <div className="flex justify-between md:justify-end w-screen bg-white">
              <nav className="hidden md:block chivo-reg flex flex-col md:flex-row">
                <Link
                  to="/"
                  className="p-2 chivo-pr-4 text-center md:w-2/6 "
                  activeClassName="text-semibold text-gray-900"
                >
                  Home
                </Link>

                <Link
                  to="/shop-home"
                  className="p-2 pr-4 text-center hover:text-gray-700 md:w-2/6"
                  activeClassName="text-semibold text-gray-900"
                >
                  Shop
                </Link>
                <Link
                  to="/contact"
                  className="p-2 pr-4 text-center hover:text-gray-700 md:w-2/6"
                  activeClassName="text-semibold text-gray-900"
                >
                  Contact
                </Link>
              </nav>
              <Link to="checkout" className="flex items-center my-2 mx-4">
                <Basket className="m-2 h-5" />
                <span className="font-sans font-normal">
                  {cartCtx.totalItems(cartCtx.items)}
                </span>
              </Link>
              <NavDrawer />
            </div>{" "}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
