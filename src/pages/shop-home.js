import React, { useContext } from "react"
import ItemsList from "../components/shop/items-list.js"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"
import Typography from "@material-ui/core/Typography"
import LatestItems from "../components/shop/latest-items"

const ShopHome = () => {
  return (
    <Layout>
      <div className="">
        <ShopNav message="All Collections" />
        <br />
        <div
          className="flex justify-center m-auto"
          style={{ maxWidth: "63rem" }}
        >
          {" "}
          <ItemsList />
        </div>{" "}
        <LatestItems />
      </div>
    </Layout>
  )
}

export default ShopHome
