import React, { useContext } from "react"

import PlantpotItemsList from "../components/shop/plantpot-items-list"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"

const Shop = () => {
  return (
    <Layout>
      <div className="">
        <ShopNav />
        <div className="flex justify-center max-w-6xl m-auto">
          <PlantpotItemsList />
        </div>
      </div>
    </Layout>
  )
}

export default Shop
