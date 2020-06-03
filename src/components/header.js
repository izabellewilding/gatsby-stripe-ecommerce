import React, { useContext } from "react"
import { Link } from "gatsby"
import Logo from "../assets/name.svg"
import Basket from "../assets/supermarket.svg"
import { CartContext } from "../components/shop/context"
import Etsy from "../assets/etsy-drawn-logo.svg"
import Flickr from "../assets/flickr.svg"
import Banner from "../assets/pagan-symbol-banner-final-WHITE.svg"
import NavDrawer from "../components/nav-drawer"

const Header = () => {
  const cartCtx = useContext(CartContext)
  return (
    <>
      <header className="relative flex justify-center overflow-hidden align-middle border-b border-gray-200 h-66 ">
        <NavDrawer />
        <section className=" w-screen flex justify-center items-center flex-col max-w-6xl md:pl-6">
          <Link to="/" className=" m-auto">
            <Logo className=" mt-12 mb-6" style={{ width: "145px" }} />{" "}
          </Link>
          <div className="w-full md:text-sm uppercase whitespace-no-wrap flex flex-col justify-between md:flex-row text-gray-800 text-center">
            <nav className="invisible md:visible chivo-reg flex flex-col md:flex-row">
              <Link
                to="/"
                className="p-2 chivo-pr-4 text-center md:w-2/6 "
                activeClassName="text-semibold text-gray-900"
              >
                Home
              </Link>
              {/* <Link
                to="/photography"
                className="p-2 text-center md:w-2/6 hover:text-gray-700"
                activeClassName="text-semibold text-gray-900"
              >
                <button className="button">Photography</button>
              </Link> */}
              <Link
                to="/shop"
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
            <div
              name="shopping-cart"
              className="flex pr-2 md:pr-8 items-center justify-between md:justify-end"
              style={{ right: "1rem" }}
            >
              <div className="flex-row flex md:justify-end">
                {" "}
                <a
                  href="https://www.flickr.com/photos/144107298@N03/"
                  className="flex item-center"
                  target="_blank"
                  alt="flickr"
                >
                  <Flickr className="m-2 h-5" alt="flickr" />
                </a>
                <a
                  href="https://www.etsy.com/uk/shop/izabelleArt"
                  className="flex item-center"
                  target="_blank"
                >
                  <Etsy className="m-2 h-5" alt="etsy" />
                </a>{" "}
              </div>

              <Link to="checkout" className="flex items-center">
                <Basket className="m-2 h-5" />
                <span className="font-sans font-normal">
                  {cartCtx.totalItems(cartCtx.items)}
                </span>
              </Link>
            </div>{" "}
          </div>{" "}
        </section>
        {/* <div className="">
            <a
              href="https://www.flickr.com/photos/144107298@N03/"
              target="blank_"
              rel="noreffer noopener"
            >
              <Flickr className="h-8" />
            </a>{" "}
          </div> */}
      </header>
    </>
  )
}

export default Header
