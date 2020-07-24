import React from "react"
import DiningItemsList from "../components/shop/products-dining"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-navigaton.js"
import { ThanksBreadcrumb } from "../components/shop/breadcrumbs"
import LatestItems from "../components/shop/products-latest"

const ShopDining = () => {
  return (
    <Layout>
      <ShopNav message="Dining Collection" />
      <DiningItemsList />
      <ThanksBreadcrumb />
      <LatestItems />
    </Layout>
  )
}

export default ShopDining
