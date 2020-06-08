import React from "react"
import { Link } from "gatsby"

const TestBreadcrumb = () => {
  return (
    <div className="w-full flex chivo-reg border-b border-gray-200 text-sm bg-gray-100">
      <div className="max-w-5xl m-auto w-full h-full p-4">
        <Link
          to="/shop-plantpots"
          className="px-4 py-6 hover:bg-white h-full duration-100"
          activeStyle={{ backgroundColor: "white" }}
        >
          Plant Pots
        </Link>
        <Link
          to="/shop-dining"
          className="px-4 py-6 h-full hover:bg-white duration-100"
          activeStyle={{ backgroundColor: "white" }}
        >
          Dinnerware
        </Link>
      </div>
    </div>
  )
}

export default TestBreadcrumb
