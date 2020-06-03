/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"

import Header from "./header"
import Footer from "./footer"

import "../styles/fonts.css"
import "../styles/layout.css"
import "../styles/tailwind.css"
import "../styles/all.css"

const Layout = ({ children }) => {
  return (
    <>
      {/* <SEO /> */}
      <div className="relative ">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
