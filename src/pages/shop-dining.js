import React from "react"
import DiningItemsList from "../components/shop/products-dining"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-navigaton.js"
import { ThanksBreadcrumb } from "../components/shop/Breadcrumbs"
import LatestItems from "../components/shop/products-latest"

const ShopDining = () => {
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

export default ShopDining
