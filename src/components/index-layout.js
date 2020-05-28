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

import IndexHeader from "./index-header"
import Footer from "./footer"

import "../styles/fonts.css"
import "./layout.css"
import "../styles/tailwind.css"
import "../styles/all.css"
import Hero from "../components/hero"
const IndexLayout = ({ children }) => {
  return (
    <>
      <SEO />
      <IndexHeader />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default IndexLayout
