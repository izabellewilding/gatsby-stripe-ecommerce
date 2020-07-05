import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import { loadStripe } from "@stripe/stripe-js"
import { CartContext } from "../components/shop/cart-context"
import Img from "../components/image-query"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core"
import { formatPrice } from "../components/shop/utils"
import Typography from "@material-ui/core/Typography"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"
import ListSubheader from "@material-ui/core/ListSubheader"

import Button from "@material-ui/core/Button"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "1.666rem",
  },
  button: {
    whiteSpace: "nowrap",
    width: "100%",
    marginBottom: "0.75rem",
    marginTop: "0.75rem",
    marginRight: "0.25rem",
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
  const classes = useStyles(pageContext.node.price)

  return (
    <Layout stripePromise={stripePromise}>
      <SEO title={pageContext.node.product.name} />

      <div className="bg-white pb-6 md:py-6 flex m-auto justify-center">
        <div className="flex flex-col md:flex-row bg-white overflow-hidden shadow-md md:w-8/12">
          <div className="w-full relative md:w-5/12 flex items-center justify-center md:p-4">
            <Img
              src={`/images/${pageContext.node.id}.jpg`}
              className="w-full h-full"
            />
          </div>
          <div
            className="w-full p-8 flex flex-col justify-start md:w-8/12"
            style={{ maxWidth: 480 }}
          >
            <Typography variant="h3" className={classes.root}>
              {pageContext.node.product.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.root}>
              {formatPrice(pageContext.node.price, pageContext.node.currency)}
            </Typography>
            <Typography variant="body2" className={classes.root}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              exercitationem fuga id nam quia
            </Typography>
            <section className="flex flex-row  text-gray-600 text-sm chivo-reg">
              <span className="flex items-center rounded-lg bg-gray-100 px-3 mr-6 mb-4 h-8">
                Color: {pageContext.node.product.metadata.color}
              </span>
              <span className="flex items-center rounded bg-gray-100 px-3 h-8">
                Width: {pageContext.node.product.metadata.width}
              </span>
            </section>
            <section className="flex flex-col  md:flex-row justify-start w-full items-baseline mb-6">
              {/* quantity input */}
              <p className="flex justify-start w-2/6">
                <FormControl className={classes.formControl}>
                  <InputLabel shrink htmlFor="quantity">
                    Quantity
                  </InputLabel>
                  <Select
                    type="number"
                    id="quantity"
                    value={quantity}
                    inputProps={{ name: " quantity" }}
                    className="bg-gray-200 text-center p-2 mr-3"
                    onChange={event => setQuantity(Number(event.target.value))}
                  >
                    <ListSubheader>Quantity</ListSubheader>

                    {/* Default each cart item to have maximum 5 quatity for demo purposes */}
                    {Array(5)
                      .fill()
                      .map((_, index) => {
                        const value = index + 1
                        return <MenuItem value={value}>{value}</MenuItem>
                      })}
                  </Select>
                </FormControl>
              </p>

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
