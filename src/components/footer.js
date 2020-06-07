import React from "react"
import { Link } from "gatsby"
import Visa from "../assets/visa.svg"
import GooglePay from "../assets/google-pay-mark_800_gray.svg"
import Amex from "../assets/american-express.svg"
import StripeLogo from "../assets/Stripe-logo-slate.svg"

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-gray-100; w-full bg-white m-auto flex flex-col md:flex-row border-t border-gray-200 p-8 overflow-hidden">
        <section className=" max-w-6xl w-full flex flex-col md:flex-row m-auto">
          <div className="flex mb-4">
            <div className=" w-6/12 mr-12">
              <h3 className="font-semibold garamond margin-bottom whitespace-no-wrap">
                Have a question?
              </h3>
              <Link
                className="text-lightPrimary chivo-reg uppercase text-xs border-gray-900 border-2 hover:bg-gray-800 hover:text-white mb-6 py-2 px-3 whitespace-no-wrap"
                to="/contact"
              >
                Get in touch{" "}
              </Link>
            </div>

            {/* social icons */}
            {/* <div className="mt-6 flex flex-row">
            <a
              href="https://github.com/izabellewilding"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              
            ></a>{" "}
            <a
              href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white shadow-lg flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              
            ></a>
            <a
              href="mailto:izabellewilding@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white text-gray-900 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              
            ></a>{" "}
          </div>{" "} */}
          </div>{" "}
          <div className="mr-12 flex-col flex text-left whitespace-no-wrap">
            <h3 className="font-semibold garamond margin-bottom">
              Useful Links
            </h3>
            <Link
              to="/"
              className="chivo-reg text-sm text-gray-700 hover:text-gray-800 mb-2"
            >
              Home
            </Link>
            <Link
              to="/shop-home"
              className="chivo-reg text-gray-700 text-sm hover:text-gray-800 mb-2"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="chivo-reg text-sm text-gray-700 hover:text-gray-800 mb-2"
            >
              Contact
            </Link>
            {/* <Img
          src="./../images/three-birds-web.jpg"
          className="hidden md:block w-screen h-full object-scale-down w-full"
        /> */}
          </div>{" "}
          <div className="flex flex-col garamond mt-4 md:mt-0 pt-4 md:pt-0 border-t border-gray-400 md:border-transparent">
            <h3 className="font-semibold garamond">Payment Methods</h3>
            <div className="flex flex-row items-center">
              <StripeLogo className="h-6" />
              <Visa className="m-2 h-10" />
              <GooglePay className="m-2 h-6" />
              <Amex className="m-2 h-10" />
            </div>
          </div>
        </section>
      </footer>{" "}
    </div>
  )
}

export default Footer
