import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
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
    <div
      className="sticky bg-gray-900 "
      style={{ top: 75, position: "sticky" }}
    >
      <div className="w-full relative m-auto ">
        {" "}
        <Img
          className="w-full bg-fixed absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center md:justify-evenly hero items-start h-screen opacity-50"
          fluid={source}
        />
        <div className="flex justify-center w-full items-center p-6 text-center flex-col absolute right-0 top-0 bottom-0 left-0">
          <section
            className="flex flex-col justify-end "
            style={{ height: "50%", maxWidth: 630 }}
          >
            <Typography variant="h1" className="underlined">
              Unique handmade pottery
            </Typography>{" "}
          </section>
          <section
            className="flex flex-col justify-start mt-8"
            style={{ height: "50%" }}
          >
            <Typography variant="h3" className={classes.subtitle1}>
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
