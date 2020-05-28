import React, { useContext } from "react"
// import Cart from "../components/shop/cart.js"
// import { CartContext } from "../components/shop/context"
// import Img from "../components/image"
import ItemsList from "../components/shop/items-list.js"
import Layout from "../components/layout"
import TestBreadcrumb from "../components/test-breadcrumb.js"

const Shop = () => {
  return (
    <Layout>
      <div className="">
        <TestBreadcrumb />
        <div className="flex bg-white  justify-center max-w-6xl m-auto">
          <ItemsList />
        </div>
      </div>
    </Layout>
  )
}

export default Shop
