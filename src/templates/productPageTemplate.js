import React, { useContext, useState, useRef } from "react"
import { Link } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { CartContext } from "../components/shop/context.js"
import Img from "../components/image"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "1.666rem",
  },
  button: {
    whiteSpace: "nowrap",
    width: "33.3333%",
    marginRight: "1rem",
  },
  imgHeader: {
    position: "absolute",
    top: "1rem",
    display: "block",
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
}))

const ButtonLink = props => {
  return <Button component={Link} {...props} />
}
const Template = ({ pageContext }) => {
  const [quantity, setQuantity] = useState(1)
  const ctx = useContext(CartContext)
  const classes = useStyles()

  return (
    <Layout stripePromise={stripePromise}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pastel Ceramics | Unique Handmade Pottery</title>
        <meta
          name={pageContext.node.product.name}
          content="Helmet application"
        />
      </Helmet>
      <div className="bg-white w-screen py-6 flex m-auto justify-center">
        <div className="flex flex-col md:flex-row bg-white overflow-hidden shadow-md md:w-8/12">
          <div className="w-full relative md:w-5/12 flex items-center justify-center md:p-4">
            <Img
              src={`/images/${pageContext.node.id}.jpg`}
              className="w-full h-full"
            />
            <Typography variant="h3" className={classes.imgHeader}>
              {pageContext.node.product.name}
            </Typography>
          </div>
          <div
            className="w-full p-4 flex flex-col justify-start p-10 md:w-8/12"
            style={{ maxWidth: 480 }}
          >
            <Typography variant="h3" className={classes.root}>
              {pageContext.node.product.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.root}>
              {ctx.formatPrice(
                pageContext.node.price,
                pageContext.node.currency
              )}
            </Typography>
            <Typography variant="body2" className={classes.root}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </Typography>
            <section className="flex flex-row  text-gray-600 text-sm chivo-reg mb-6">
              <span className="flex items-center rounded-lg bg-gray-100 px-3 mr-6 mb-4 h-8">
                Color: {pageContext.node.product.metadata.color}
              </span>
              <span className="flex items-center rounded bg-gray-100 px-3 h-8">
                Width: {pageContext.node.product.metadata.width}
              </span>
            </section>
            <section className="flex flex-row justify-start w-full items-center mb-6">
              <button
                className="flex justify-center"
                onClick={() => setQuantity(quantity + 1)}
              ></button>
              <p className="flex justify-start w-2/6">
                <Input
                  type="number"
                  // value={quantity}
                  className="bg-gray-200 w-10 text-center py-1"
                  // onChange={event => updateQuantity(event.target.value)}
                />
              </p>
              {/* <Button
                  className="flex justify-center"
                  onClick={() => setQuantity(quantity - 1)}
                ></Button> */}
              <Button
                color="secondary"
                className={classes.button}
                variant="contained"
                onClick={() => {
                  ctx.addToCart(pageContext.node, quantity)
                }}
              >
                {" "}
                Add to Cart
              </Button>
              <ButtonLink
                className={classes.button}
                color="secondary"
                variant="contained"
                to="/cart-page"
              >
                Checkout{" "}
              </ButtonLink>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Template
