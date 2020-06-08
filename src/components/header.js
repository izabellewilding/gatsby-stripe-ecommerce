import React, { useContext } from "react"
import { Link } from "gatsby"
import Basket from "../assets/supermarket.svg"
import { CartContext } from "./shop/context"
import NavDrawer from "./nav-drawer"
import cx from "classnames"
import Logo from "../assets/name.svg"

const Header = props => {
  const cartCtx = useContext(CartContext)

  return (
    <>
      <header
        className={cx(
          " bg-pattern flex justify-center overflow-hidden align-middle border-b border-gray-200 h-66 bg-white",
          {
            "p-0 fixed right-05 left-05": props.page === "home",
            "p-0 relative": props.page !== "home",
          }
        )}
      >
        <div className="relative w-full flex justify-center items-center flex-col">
          <div className="w-full flex flex-col">
            <Link to="/" className="m-auto my-4 ">
              <Logo className="w-32" />
            </Link>
            <div className="bg-white w-full">
              <div className="max-w-5xl w-full m-auto flex justify-between items-center">
                <nav className="hidden md:block chivo-reg flex flex-col md:flex-row uppercase text-sm">
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
        </div>
      </header>
    </>
  )
}

export default Header
