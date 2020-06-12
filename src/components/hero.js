import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"

const Hero = () => {
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
      style={{ top: 56, position: "sticky" }}
    >
      <div className="w-full max-w-6xl relative m-auto">
        {" "}
        <Img
          className="w-full bg-fixed absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center md:justify-evenly hero items-start h-screen opacity-50"
          fluid={source}
        />
        <div className="flex justify-center w-full items-center p-6 text-center flex-col absolute top-0 bottom-0 left-0">
          <h2 className="text-4xl md:text-4xl raleway uppercase underlined text-white">
            Affordable handmade pottery
          </h2>{" "}
          <h1 className=" text-lg md:text-2xl chivo-reg text-white my-8">
            Get 15% off our new collection with code PASTEL01
          </h1>{" "}
          <Link to="/shop-home" className="">
            <Button variant="contained" size="large" color="secondary">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
