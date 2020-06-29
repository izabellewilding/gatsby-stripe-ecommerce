import React, { useContext } from "react"
import PlantpotItemsList from "../components/shop/plantpot-items-list"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"
import LatestItems from "../components/shop/latest-items"

const Shop = () => {
  return (
    <Layout>
      <div className="">
        <ShopNav message="Plantpot Collection" />
        <div className="flex justify-center max-w-6xl m-auto pt-12">
          <PlantpotItemsList />
        </div>
        <LatestItems />
      </div>
    </Layout>
  )
}

export default Shop
