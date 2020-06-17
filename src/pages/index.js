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
import LatestItems from "../components/shop/latest-items"
import AbsoluteImage from "../components/tailwind-components/absolute-image"
// import GridList from "@material-ui/core/GridList"
// import GridListTile from "@material-ui/core/GridListTile"

const useStyles = makeStyles(theme => ({
  container: {
    //weird color behaviour need to revisit
    backgroundColor: "#2a333b",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: 1970,
    height: "100vh",
    padding: 0,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: 0,
  },
  gridList: {
    // width: "100%",
    // height: "100%",
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

// const GridListImg = props => {
//   return <GridListTile component={Img} {...props} />
// }

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

  console.warn("DATA:", data)

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
          {/* <Img fluid={data.childImageSharp.fluid} /> */}
          <div className="md:w-1/2 w-full h-full p-4">
            <h1 className="raleway-light text-xl uppercase ">
              We make beautiful wheel-thrown pottery at an affordable price.
            </h1>
            <Typography variant="subtitle1">
              We make beautiful wheel-thrown pottery at an affordable price.
            </Typography>
          </div>
          {/* <div className=" md-: w-full h-full"> */}
          <AbsoluteImage
            // key={data.childImageSharp.name}
            className=""
            cols="1"
            fluid={data.fileName.childImageSharp.fluid}
          />
          {/* ))} */}
          {/* </div> */}
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    fileName: file(
      relativePath: { eq: "clarissa-carbungco-Q2MOvf4IZY8-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default ArtGallery
