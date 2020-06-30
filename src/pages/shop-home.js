import React, { useContext } from "react"
import ItemsList from "../components/shop/ProductsAll.js"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"
import Typography from "@material-ui/core/Typography"
import LatestItems from "../components/shop/ProductsLatest"

const ShopHome = () => {
  return (
    <Layout>
      <div className="">
        <ShopNav message="All Collections" />
        <ItemsList message="All Shop Items" />
        <LatestItems />
      </div>
    </Layout>
  )
}

export default ShopHome
