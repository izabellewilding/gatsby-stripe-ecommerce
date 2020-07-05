import React from "react"
import ItemsList from "../components/shop/Products-all.js"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-navigaton.js"
import LatestItems from "../components/shop/products-latest"

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
