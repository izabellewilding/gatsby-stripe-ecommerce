import React from "react"
import { Link } from "gatsby"
import Visa from "../assets/visa.svg"
import GooglePay from "../assets/google-pay-mark_800_gray.svg"
import Amex from "../assets/american-express.svg"
import StripeLogo from "../assets/Stripe-logo-slate.svg"
import { makeStyles } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { element } from "prop-types"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    position: "sticky",
  },
  subtitle1: {
    marginBottom: "0.75rem",
  },
  link: {
    color: theme.palette.secondary.main,
  },
}))

const TypographyLink = props => {
  return <Typography variant="body1" component={Link} {...props} />
}

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <section className="flex flex-col md:flex-row border-t border-gray-200 p-8 py-12 overflow-hidden m-auto">
        <div className="flex mb-4">
          <div className=" w-6/12 mr-12">
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Have a question?
            </Typography>
            <TypographyLink to="/contact" className={classes.link}>
              Send us a message or visit in store.
            </TypographyLink>
          </div>
        </div>{" "}
        <div className="mr-12 flex-col flex text-left whitespace-no-wrap">
          <Typography variant="subtitle1" className={classes.subtitle1}>
            Useful Links
          </Typography>
          <TypographyLink to="/" className={classes.link}>
            Home
          </TypographyLink>
          <TypographyLink to="/shop-home" className={classes.link}>
            Shop
          </TypographyLink>
          <TypographyLink to="/contact" className={classes.link}>
            Contact
          </TypographyLink>
        </div>{" "}
        <div className="flex flex-col garamond mt-4 md:mt-0 pt-4 md:pt-0 border-t border-gray-400 md:border-transparent">
          <Typography variant="subtitle1" className={classes.subtitle1}>
            Payment Methods
          </Typography>
          <div className="flex flex-row items-center">
            <StripeLogo className="h-6" />
            <Visa className="m-2 h-10" />
            <GooglePay className="m-2 h-6" />
            <Amex className="m-2 h-10" />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
