import React, { useState } from "react"
import Slider from "@material-ui/core/Slider"
import Typography from "@material-ui/core/Typography"
import Item from "./ProductTemplate"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_anttTREN4cB8C5RCPRb8vEZL00IHwVyBtk")

const ItemsListTemplate = props => {
  const [value, setValue] = useState(80)

  return (
    <div className="w-full flex flex-col m-auto max-w-5xl items-center">
      <div className="flex flex-col md:flex-row w-full p-4 justify-between items-center">
        <div className="flex justify-center items-center p-4">
          <Typography variant="h1">{props.message}</Typography>
        </div>
        <div className="text-center w-full m-5" style={{ maxWidth: 200 }}>
          <Typography variant="subtitle1">Filter by Price</Typography>
          <Typography variant="body2">Max Price £{value}</Typography>
          <Slider
            min={8}
            max={80}
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="continuous-slider"
          />
        </div>
      </div>

      <div
        className="flex flex-wrap m-auto justify-center lg:justify-between"
        style={{ maxWidth: "94rem" }}
      >
        {props.skus.edges
          .filter(({ node }) => node.price <= value * 100)
          .map(({ node: sku }) => (
            <Item key={sku.id} sku={sku} stripePromise={stripePromise} />
          ))}
      </div>
    </div>
  )
}
export default ItemsListTemplate
