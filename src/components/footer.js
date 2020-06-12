import React from "react"
import { Link } from "gatsby"
import Visa from "../assets/visa.svg"
import GooglePay from "../assets/google-pay-mark_800_gray.svg"
import Amex from "../assets/american-express.svg"
import StripeLogo from "../assets/Stripe-logo-slate.svg"
import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    position: "sticky",
  },
  button: {
    border: 2,
  },
}))

function ButtonLink(props) {
  return (
    <Button
      component={Link}
      variant="outlined"
      size="large"
      color="primary"
      {...props}
    />
  )
}

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <section className="flex flex-col md:flex-row border-t border-gray-200 p-8 overflow-hidden m-auto">
        <div className="flex mb-4">
          <div className=" w-6/12 mr-12">
            <Typography variant="subtitle2">Have a question?</Typography>
            <ButtonLink
              to="/contact"
              className="text-lightPrimary chivo-reg uppercase text-xs border-gray-900 border-2 hover:bg-gray-800 hover:text-white mb-6 py-2 px-3 whitespace-no-wrap"
            >
              Get in touch{" "}
            </ButtonLink>
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
          <Typography
            variant="h3"
            className="font-semibold garamond margin-bottom"
          >
            Useful Links
          </Typography>
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
      {/* <div className="relative bg-gray-900">
        <p className="text-white p-10 text-center raleway">
          This project was made by{" "}
          <a
            href="https://www.izzywilding.com/"
            target="_blank"
            className="text-indigo-400"
          >
            Izzy Wilding
          </a>{" "}
        </p>
      </div> */}
    </footer>
  )
}

export default Footer
