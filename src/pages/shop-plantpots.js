import React from "react"
import PlantpotItemsList from "../components/shop/products-plantpots"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-navigaton.js"
import LatestItems from "../components/shop/products-latest"

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
