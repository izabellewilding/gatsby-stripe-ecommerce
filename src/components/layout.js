/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@material-ui/core/styles"
import SEO from "../components/SEO"
// import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./Theme"

import Header from "./header"
import Footer from "./footer"

import "../styles/fonts.css"
import "../styles/layout.css"
import "../styles/tailwind.css"
import "../styles/all.css"

const Layout = ({ children, page }) => {
  return (
    <>
      {" "}
      <SEO title="Gatsby Stripe Ecommerce" />
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}

        <div className="relative ">
          <Header page={page} className=" hidden" />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
