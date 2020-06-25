import React, { useContext } from "react"
import DiningItemsList from "../components/shop/dining-items-list"
import Layout from "../components/layout"
import ShopNav from "../components/shop/shop-nav.js"
import ThanksBreadcrumb from "../components/shop/thanks-breadcrumb"

const Shop = () => {
  return (
    <Layout>
      <div className="">
        <ShopNav />
        <div className="flex justify-center max-w-6xl m-auto pt-12">
          <DiningItemsList />
        </div>
        <ThanksBreadcrumb />
      </div>
    </Layout>
  )
}

export default Shop
