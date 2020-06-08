import React, { useContext } from "react"
import ItemsList from "../components/shop/items-list.js"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"

const ShopHome = () => {
  return (
    <Layout>
      <div className="bg-gray-400">
        <ShopNav />
        <div className="flex justify-center max-w-6xl m-auto">
          <ItemsList />
        </div>
      </div>
    </Layout>
  )
}

export default ShopHome
