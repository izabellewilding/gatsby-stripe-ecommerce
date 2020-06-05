import React, { useContext } from "react"

import DiningItemsList from "../components/shop/dining-items-list"
import Layout from "../components/layout"
import TestBreadcrumb from "../components/test-breadcrumb.js"
import ThanksBreadcrumb from "../components/thanks-breadcrumb"

const Shop = () => {
  return (
    <Layout>
      <div className="bg-gray-400">
        <TestBreadcrumb />
        <div className="flex justify-center max-w-6xl m-auto">
          <DiningItemsList />
        </div>
        <ThanksBreadcrumb />
      </div>
    </Layout>
  )
}

export default Shop
