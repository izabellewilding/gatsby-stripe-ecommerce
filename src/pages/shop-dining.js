import React from "react"
import DiningItemsList from "../components/shop/ProductsDining"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"
import ThanksBreadcrumb from "../components/shop/thanks-breadcrumb"
import LatestItems from "../components/shop/ProductsLatest"

const Shop = () => {
  return (
    <Layout>
      <div className="">
        <ShopNav message="Dining Collection" />
        <DiningItemsList />
        <ThanksBreadcrumb />
        <LatestItems />
      </div>
    </Layout>
  )
}

export default Shop
