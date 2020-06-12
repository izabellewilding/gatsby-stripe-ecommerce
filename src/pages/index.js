import React, { useState, useEffect, useRef } from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import styled from "styled-components"
import Hero from "../components/hero"
import InfoBar from "../components/info-bar"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  container: {
    //weird color behaviour need to revisit
    backgroundColor: "#f1f7fd",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
}))

const StyledScrim = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  transition: all 0.5s;
`

function debounce(func, wait, immediate) {
  var timeout

  return function executedFunction() {
    var context = this
    var args = arguments

    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    var callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

const ArtGallery = ({ data }) => {
  const classes = useStyles()
  const galleryRef = useRef()
  const [scrim, setScrim] = useState(false)

  useEffect(() => {
    const animateScrim = debounce(() => {
      setScrim(galleryRef.current.getBoundingClientRect().y < 450)
    }, 10)
    window.addEventListener("scroll", animateScrim)
    return () => {
      window.removeEventListener("scroll", animateScrim)
    }
  }, [])

  return (
    <Layout page="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gatsby Stripe Ecommerce</title>
        <meta name="Artwork by Izabelle Wilding" content="Helmet application" />
      </Helmet>
      <Hero />

      <StyledScrim className={`${scrim ? "opacity-75" : "z opacity-0 "}`} />

      <div
        className="w-full h-full top relative m-auto z-10"
        style={{ transform: "translate3d(0px,0px,0px)" }}
        ref={galleryRef}
      >
        <InfoBar />

        <Container className={classes.container}>
          <Typography
            variant="h2"
            className="p-8 text-center text-2xl  raleway uppercase text-gray-900 mr-auto ml-auto"
          >
            Browse the Pastel Gallery
          </Typography>
          {data.allFile.edges.map(({ node }) => (
            <div className=" square photo">
              <Img
                fluid={node.childImageSharp.fluid}
                className=" img-item w-full h-full"
                style={{ position: "absolute" }}

                // alt="Robin in the Woods"
              />
              <div className="chivo-reg image-title absolute left-0 right-0">
                {/* <p>Robin Duo on Thin Board - Unframed</p> */}
              </div>
            </div>
          ))}
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "home-display-items" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1600) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`

export default ArtGallery
