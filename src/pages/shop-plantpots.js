import React, { useContext } from "react"

import PlantpotItemsList from "../components/shop/plantpot-items-list"
import Layout from "../components/layout"
import TestBreadcrumb from "../components/test-breadcrumb.js"

const Shop = () => {
  return (
    <Layout>
      <div className="bg-gray-400">
        <TestBreadcrumb />
        <div className="flex justify-center max-w-6xl m-auto">
          <PlantpotItemsList />
        </div>
      </div>
    </Layout>
  )
}

export default Shop
