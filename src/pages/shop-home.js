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

        <ItemsList />
        <LatestItems />
      </div>
    </Layout>
  )
}

export default ShopHome
