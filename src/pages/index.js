import React, { useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import styled from "styled-components"
import Hero from "../components/hero"
import InfoBar from "../components/info-bar"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import LatestItems from "../components/shop/ProductsLatest"
// import GridList from "@material-ui/core/GridList"
// import GridListTile from "@material-ui/core/GridListTile"

const useStyles = makeStyles(theme => ({
  container: {
    //weird color behaviour need to revisit
    backgroundColor: "#2a333b",
    justifyContent: "center",
    padding: 0,
    height: "auto",
    [theme.breakpoints.up(768)]: {
      height: "80vh",
    },
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },
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
  h3: {
    textAlign: "center",
    color: "#d5ebe9",
    paddingBottom: "3rem",
  },
  textContainer: {
    backgroundColor: theme.palette.primary.dark,
  },
}))

const ButtonLink = props => {
  return <Button component={Link} {...props} />
}

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

const ArtGallery = ({ data }, theme) => {
  const classes = useStyles()
  const galleryRef = useRef()
  const [scrim, setScrim] = useState(false)

  // useEffect(() => {
  //   const animateScrim = debounce(() => {
  //     setScrim(galleryRef.current.getBoundingClientRect().y < 450)
  //   }, 10)
  //   window.addEventListener("scroll", animateScrim)
  //   return () => {
  //     window.removeEventListener("scroll", animateScrim)
  //   }
  // }, [])

  return (
    <Layout page="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gatsby Stripe Ecommerce</title>
        <meta name="Artwork by Izabelle Wilding" content="Helmet application" />
      </Helmet>
      <Hero />

      {/* <StyledScrim className={`${scrim ? "opacity-75" : "z opacity-0 "}`} /> */}

      <div className="w-full h-full top relative m-auto z-50" ref={galleryRef}>
        <InfoBar />

        <Container className={classes.container}>
          {/* <Img fluid={data.childImageSharp.fluid} /> */}
          <Img
            // key={data.childImageSharp.name}
            className="w-full md:w-1/2 h-full m-auto"
            fluid={data.fileName.childImageSharp.fluid}
          />
          <div
            className="flex flex-col md:w-1/2  p-8 text-center py-20 items-center justify-center"
            style={{ backgroundColor: "#82ada9 " }}
          >
            <Typography variant="h2" className={classes.h3}>
              We make beautiful wheel-thrown pottery at an affordable price.
            </Typography>
            <ButtonLink
              to="/shop-home"
              variant="contained"
              color="primary"
              size="large"
              className=" w-48"
            >
              Shop Now
            </ButtonLink>
          </div>
        </Container>
        <LatestItems />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    fileName: file(
      relativePath: { eq: "oshin-khandelwal-fq839fSNEuo-unsplash.jpg" }
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
