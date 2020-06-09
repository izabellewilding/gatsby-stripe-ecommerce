/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@material-ui/core/styles"
// import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"

import Header from "./header"
import Footer from "./footer"

import "../styles/fonts.css"
import "../styles/layout.css"
import "../styles/tailwind.css"
import "../styles/all.css"

const Layout = ({ children, page }) => {
  return (
    <>
      {/* <SEO /> */}
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}

        <head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </head>
        <div className="relative ">
          <Header page={page} />
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
