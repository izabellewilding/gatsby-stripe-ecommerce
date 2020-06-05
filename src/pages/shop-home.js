import React, { useContext } from "react"
import ItemsList from "../components/shop/items-list.js"
import Layout from "../components/layout"
import TestBreadcrumb from "../components/test-breadcrumb.js"

const ShopHome = () => {
  return (
    <Layout>
      <div className="bg-gray-400">
        <TestBreadcrumb />
        <div className="flex justify-center max-w-6xl m-auto">
          <ItemsList />
        </div>
      </div>
    </Layout>
  )
}

export default ShopHome
