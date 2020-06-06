import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const Hero = () => {
  const { mobileBanner, desktopBanner } = useStaticQuery(
    graphql`
      query {
        mobileBanner: file(relativePath: { eq: "single-bowl-cropped.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        desktopBanner: file(
          relativePath: { eq: "tom-crew-YA2E3d7a9Wo-unsplash.jpg" }
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

  const source = [
    mobileBanner.childImageSharp.fluid,
    {
      ...desktopBanner.childImageSharp.fluid,
      media: `(min-width: 750px)`,
    },
  ]

  return (
    <div className="sticky top ">
      <BackgroundImage
        className="w-full bg-fixed flex flex-col justify-center md:justify-evenly hero items-start h-full"
        fluid={source}
      >
        <div className="w-full max-w-6xl m-auto">
          <div className="flex p-6 md:items-start flex-col w-2/3 md:w-1/2 md:ml-10 ">
            <h2 className="text-2xl md:text-3xl raleway uppercase underlined text-white">
              Affordable unique handmade pottery
            </h2>{" "}
            <h1 className="text-xl md:text-3xl chivo-reg text-white mt-6 ">
              New Collection
            </h1>{" "}
            <Link
              className=" chivo-reg uppercase mt-6 text-md z-50 text-center text-white border-white shadow-md border-2 py-2 px-3 whitespace-no-wrap border-white hover:bg-gray-800 hover:border-gray-800 hover:bg-gray-800 transition-all duration-75"
              to="/shop-home"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

// const StyledHeroImages = styled(HeroImages)`
//   height: 90vh;
//   @media (min-width: 750px) {
//     height: 75px;
//   }
// `

export default Hero
