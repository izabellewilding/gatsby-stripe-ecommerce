import React, { useContext } from "react"
import ItemsList from "../components/shop/items-list.js"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"

const ShopHome = () => {
  return (
    <Layout>
      <div className="">
        <ShopNav />
        <div
          className="flex justify-center m-auto"
          style={{ maxWidth: "63rem" }}
        >
          <ItemsList />
        </div>
      </div>
    </Layout>
  )
}

export default ShopHome
