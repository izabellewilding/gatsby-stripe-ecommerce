import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"
import Toolbar from "@material-ui/core/Toolbar"
import AbsoluteImage from "./tailwind-components/absolute-image.js"

const useStyles = makeStyles({
  heroTitle: {
    fontSize: "3rem",
  },
  subtitle1: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    padding: "1rem",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    minWidth: 250,
  },
  stickyHero: {
    position: "-webkit-sticky",
    position: "sticky",
    top: 0,
    backgroundColor: "black",
  },
  toolbar: {
    height: 95,
  },

  // h1: {
  //   [theme.breakpoints.]
  // }
})

const Hero = () => {
  const classes = useStyles()

  const { desktopBanner } = useStaticQuery(
    graphql`
      query {
        desktopBanner: file(
          relativePath: { eq: "jessica-ruscello-G8vPQ-XVxxY-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const source = [desktopBanner.childImageSharp.fluid]

  return (
    <div className={classes.stickyHero}>
      <div className="w-full relative m-auto ">
        {" "}
        <AbsoluteImage fluid={source} style={{ opacity: "0.65" }} />
        <div className="flex justify-center w-full items-center p-4 text-center flex-col absolute right-0 top-0 bottom-0 left-0">
          <Toolbar className={classes.toolbar} />

          <section
            className="flex flex-col justify-end underlined pb-4"
            style={{ height: "50%", maxWidth: 630 }}
          >
            <Typography variant="h1" className={classes.heroTitle}>
              Unique handmade pottery
            </Typography>{" "}
          </section>
          <section
            className="flex flex-col justify-start"
            style={{ height: "50%" }}
          >
            <Typography variant="h4" className={classes.subtitle1}>
              Get 15% off our new collection with code{" "}
              <span className="text-teal-100">PASTEL01</span>
            </Typography>{" "}
            <Link to="/shop-home" className="">
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className={classes.button}
              >
                Shop Now
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Hero
