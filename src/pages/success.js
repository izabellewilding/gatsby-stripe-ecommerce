import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CheckoutJourneyIcons from "../components/shop/checkout-journey-icons"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.secondary.light,
  },
}))

let number = new Date()
let time = number.getTime()
let refNo = time

console.warn(refNo)

const ButtonLink = props => {
  return <Button component={Link} {...props} />
}

const Success = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Box className="min-h-screen">
        <CheckoutJourneyIcons page="success" />
        <div
          className="flex flex-col justify-center align-middle m-auto w-4/5 md:w-2/5"
          color="primary"
        >
          <Typography
            variant="h2"
            className=" text-gray-800 text-center text-6xl garamond py-12"
          >
            Thank you for your order!
          </Typography>
          <Typography variant="subtitle1" className="text-center pb-12">
            Your reference number is: {[refNo]}
          </Typography>
          <ButtonLink to="/shop-home" color="secondary" variant="contained">
            Back to Shop
          </ButtonLink>
        </div>
      </Box>
    </Layout>
  )
}

export default Success
