import React, { useContext } from "react"
import PlantpotItemsList from "../components/shop/ProductsPlantpots"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"
import LatestItems from "../components/shop/ProductsLatest"

const Shop = props => {
  return (
    <Layout>
      <div className="">
        <ShopNav message="Plantpot Collection" />
        <PlantpotItemsList />
        <LatestItems />
      </div>
    </Layout>
  )
}

export default Shop
